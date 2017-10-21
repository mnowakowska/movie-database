import requests
import urllib.parse

from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response


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
        url = urllib.parse.urljoin(settings.MOVIE_DB_API_URL, "search/multi")
        response = requests.request("GET", url, data=payload)
        data = response.json()
        return Response(data)
