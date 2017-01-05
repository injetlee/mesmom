from django.conf.urls import url
from mes import views
urlpatterns = [
    url(r'^$', views.Home.as_view(), name='home'),
    url(r'^share/$', views.Share.as_view(), name='share'),

]
