from django.contrib.auth.models import User, Group
from django.http import JsonResponse, HttpResponse
from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.decorators import api_view
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from django.core import serializers

from BrokenAccess.serializers import UserSerializer, GroupSerializer
from django_filters import rest_framework as filters

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer

    #permission_classes = [permissions.IsAuthenticated]

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

@api_view(['GET', 'POST'])
def getUser(request):

    #serializer = UserSerializer(data=request.data)

    person = serializers.serialize("json", User.objects.filter(email=request.data["email"]), fields=('email','username'))
    if person:
        return HttpResponse(person, content_type="application/json", status=status.HTTP_200_OK)
    else:
        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)

