from django.contrib.auth.models import User
from rest_framework import serializers

from .models import FavoriteMovies


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')


class FavoriteMoviesSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = FavoriteMovies
        fields = ('user', 'media_type', 'media_name', 'media_overview', 'media_id', 'poster_path')
