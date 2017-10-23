import requests
import urllib.parse

from django.conf import settings
from django.contrib.auth.models import User

from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response

from .serializer import UserSerializer, FavoriteMoviesSerializer


class MultiSearch(APIView):
    """
    Search multiple models in a single request.
    Multi search currently supports searching for movies,
    tv shows and people in a single request.
    """
    def get(self, request):
        """
        Return a list of all users.
        """
        payload = {
            'query': request.GET.get('q'),
            'api_key': settings.MOVIE_DB_API_KEY,
            'page': request.GET.get('page', 1),
        }
        url = urllib.parse.urljoin(settings.MOVIE_DB_API_URL, 'search/multi')
        response = requests.request('GET', url, data=payload)
        data = response.json()
        # API doesn't support getting page higher than 1000
        if data['total_pages'] > 1000:
            data['total_pages'] = 1000
        return Response(data)


class CreateUser(CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = ()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(
                username=serializer.data['username'],
                password=serializer.data['password']
            )
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        return Response('Bad data', status=status.HTTP_400_BAD_REQUEST)


class UserFavoriteMoviesViewSet(viewsets.ModelViewSet):
    serializer_class = FavoriteMoviesSerializer

    def get_queryset(self):
        return self.request.user.favoritemovies_set.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
