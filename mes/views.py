from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.detail import DetailView
from django.views.generic.base import TemplateView
from django.views.generic import ListView
from mes.models import News
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator


class Home(ListView):
    model = News
    queryset = News.objects.all()
    template_name = 'mes/home.html'


class Share(TemplateView):
    template_name = "mes/share.html"
