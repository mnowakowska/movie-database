import requests
import urllib.parse

from django.conf import settings

from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializer import UserSerializer


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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        token, created = Token.objects.get_or_create(user=serializer.instance)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED, headers=headers)
