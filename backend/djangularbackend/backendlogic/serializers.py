from rest_framework import serializers
from .models import *


class DeparmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Deparments
        fields='__all__'

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Employees
        fields='__all__'