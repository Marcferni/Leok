from django.shortcuts import render
from .models import Experience

def experience_list(request):
    experiences = Experience.objects.all().order_by('-created_at')
    return render(request, "list.html", {"experiences": experiences})