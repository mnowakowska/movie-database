# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-23 00:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie_database_api', '0002_favoritemovies_poster_path'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favoritemovies',
            name='media_overview',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='favoritemovies',
            name='poster_path',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]