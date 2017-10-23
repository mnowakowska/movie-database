from django.contrib.auth.models import User
from django.db import models


class FavoriteMovies(models.Model):
    user = models.ForeignKey(User)
    media_type = models.CharField(max_length=200)
    media_name = models.CharField(max_length=200)
    media_overview = models.TextField(null=True, blank=True)
    media_id = models.CharField(max_length=200)
    poster_path = models.CharField(max_length=200, null=True, blank=True)
