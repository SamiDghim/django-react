 
from django.urls import path

from . import views
from .views import TransactionListCreateView

urlpatterns = [
  # Existing URL pattern for list and create operations
  path(
    'transactions/',
    TransactionListCreateView.as_view(),
    name='transaction-list',
  ),
  # New URL pattern for retrieve, update, and delete operations
  path(
    'transactions/<uuid:id>/',
    views.TransactionRetrieveUpdateDestroyView.as_view(),
    name='transaction-detail',
  ),
]
