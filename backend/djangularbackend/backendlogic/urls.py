from os import stat
from django.urls import path
from django.conf.urls import url 
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
url(r'^deparment/$',views.deparmentApi,name='deparment_full'),
url(r'^deparment/([0-9]+)$',views.deparmentApi,name='api_dep'),

url(r'^employee/$',views.employeeApi,name='deparment_full'),
url(r'^employee/([0-9]+)$',views.employeeApi,name='api_dep'),

url(r'^SaveFile$',views.SaveMedia,name='mediasave'),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)