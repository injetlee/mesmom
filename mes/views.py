from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.detail import DetailView
from django.views.generic.base import TemplateView
from django.views.generic import ListView
from mes.models import News


class Home(ListView):
    model = News


class Share(TemplateView):
    template_name = "mes/share.html"
