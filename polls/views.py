from django.shortcuts import render
from django.http import HttpResponce

# Create your views here.

def index(request) {
    return HttpResponce("Hello World. You're at the Poll's Index.")
}
