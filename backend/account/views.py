from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer, MyTokenObtainPairSerializer
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView



class UserRegistrationView(APIView):
       def post(self, request):
              serializer = UserRegistrationSerializer(data=request.data)
              if serializer.is_valid():
                     user = serializer.save()
                     return Response({"msg":"User Created"}, status=status.HTTP_201_CREATED)
              return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
       serializer_class = MyTokenObtainPairSerializer