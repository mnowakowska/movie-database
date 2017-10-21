from django.apps import AppConfig


class MovieDatabaseApiConfig(AppConfig):
    name = 'movie_database_api'

    def ready(self):
        from . import signals
