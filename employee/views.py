from django.shortcuts import render
from django.http import HttpResponse, Http404
from employee.models import Employee

# Create your views here.


def employee_details(request, pk):
    try:
        employee = Employee.objects.get(pk=pk)
        context = {
            'employee': employee
        }
        return render(request, 'employee_detail.html', context)
    except:
        raise Http404
