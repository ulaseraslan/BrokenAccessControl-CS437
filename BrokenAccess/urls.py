from django.urls import include, path
from rest_framework import routers
from BrokenAccess import views
from django.conf.urls import url

from BrokenAccess.views import getUser

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path("users/", getUser, name="getUser")
]