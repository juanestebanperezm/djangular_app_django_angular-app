from django.db.models.sql import query
from django.shortcuts import render
from .models import *
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser 
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage


@csrf_exempt
def deparmentApi(request,id=0):
    if request.method=='GET':
        deparments=Deparments.objects.all()
        deparments_serializer=DeparmentSerializer(deparments,many=True)
        return JsonResponse(deparments_serializer.data,safe=False)

    elif request.method=='POST':
        deparments_data=JSONParser().parse(request)
        deparments_serializer=DeparmentSerializer(data=deparments_data)
        if deparments_serializer.is_valid():
            deparments_serializer.save()
            return JsonResponse('Exito',safe=False)
        return JsonResponse('Fallo',safe=False)

    elif request.method=='PUT':
        deparment_data=JSONParser().parse(request)
        deparment=Deparments.objects.get(DeparmentId=deparment_data['DeparmentId'])
        deparments_serializer=DeparmentSerializer(deparment,data=deparment_data)
        if deparments_serializer.is_valid():
            deparments_serializer.save()
            return JsonResponse('Exito!s',safe=False)
        return JsonResponse('fallo',safe=False)

    elif request.method=='DELETE':
        deparments=Deparments.objects.get(DeparmentId=id)
        deparments.delete()
        return JsonResponse('Eliminado',safe=False)



@csrf_exempt
def employeeApi(request,id=0):
    if request.method=='GET':
        employees=Employees.objects.all()
        employees_serializer=EmployeeSerializer(employees,many=True)
        return JsonResponse(employees_serializer.data,safe=False)

    elif request.method=='POST':
        employees_data=JSONParser().parse(request)
        employees_serializer=EmployeeSerializer(data=employees_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse('Exito',safe=False)
        return JsonResponse('Fallo',safe=False)

    elif request.method=='PUT':
        employee_data=JSONParser().parse(request)
        employee=Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employees_serializer=EmployeeSerializer(employee,data=employee_data)
        if employees_serializer.is_valid():
            employees_serializer.save()
            return JsonResponse('Exito!s',safe=False)
        return JsonResponse('fallo',safe=False)

    elif request.method=='DELETE':
        employee=Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse('Eliminado',safe=False)


@csrf_exempt
def SaveMedia(request):
    file=request.FILES['uploadedFile']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)