from django.db import models

# Create your models here.


class News(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    pub_date = models.DateTimeField('date published')


class Question(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    pub_date = models.DateTimeField(
        'date published', auto_now=True)
