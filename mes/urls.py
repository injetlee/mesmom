from django.conf.urls import url

from mes import views
app_name = 'mes'
urlpatterns = [
    url(r'^$', views.home, name='home'),

]
