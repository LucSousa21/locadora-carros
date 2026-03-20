from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'locadora/index.html')



def cars(request):
    return render(request, 'locadora/catalogo.html')



