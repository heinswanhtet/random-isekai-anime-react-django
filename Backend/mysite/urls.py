from django.urls import path

from . import views

app_name = 'mysite'

urlpatterns = [
    path('', views.ApiIsekaiRandom.as_view(), name='api-isekai-random')
]
