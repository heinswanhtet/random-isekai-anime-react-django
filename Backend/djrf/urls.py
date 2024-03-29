from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # myapp
    path('', include('mysite.urls', namespace='mysite')),
]
