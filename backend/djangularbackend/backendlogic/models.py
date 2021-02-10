from django.db import models
 

class Deparments(models.Model):
    DeparmentId=models.AutoField(primary_key=True)
    DeparmentName=models.CharField(max_length=100)

class Employees(models.Model):
    EmployeeId=models.AutoField(primary_key=True)
    EmployeeName=models.CharField(max_length=100)
    Deparment=models.CharField(max_length=100)
    DateOfJoining=models.DateField()
    PhotoFileName=models.CharField(max_length=100)


