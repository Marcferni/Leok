from django.db import models

class Experience(models.Model):
    CATEGORY_CHOICES = [
        ('knowledge', 'Conocimiento'),
        ('entertainment', 'Entretenimiento'),
    ]
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    description = models.TextField()
    rating = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
