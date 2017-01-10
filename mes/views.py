from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic.detail import DetailView
from django.views.generic.base import TemplateView
from django.views.generic import ListView
from mes.models import News, Question
from django.urls import reverse


class Home(ListView):
    # model = News
    queryset = News.objects.order_by('-pub_date')
    template_name = 'mes/home.html'


class Share(ListView):
    model = Question
    template_name = "mes/share.html"
    context_object_name = 'Question'

    def post(self, request):
        title = request.POST['title']
        content = request.POST['content']
        tag = request.POST['tag']
        insert = Question(title=title, content=content)
        insert.save()
        return redirect(reverse('mes:share'))
        # return redirect('mes:share')
