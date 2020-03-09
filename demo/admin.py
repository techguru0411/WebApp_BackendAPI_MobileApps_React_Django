from django.contrib import admin
from .models import Book, BookNumber, Character

# Register your models here.

@admin.register(Book)

class BookAdmin(admin.ModelAdmin):
    list_display = ['title', 'price']
    list_filter = ['published']
    search_fields = ['title', 'description']

admin.site.register(BookNumber)
admin.site.register(Character)

