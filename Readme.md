# Django React Project

This project is a starter template for a Django backend with Django REST Framework and CORS support, ready to be paired with a React frontend.

## Setup Instructions

1. **Create a virtual environment**
	```sh
	python3 -m venv env
	```
	This isolates dependencies for this project.

2. **Activate the virtual environment**
	```sh
	source env/bin/activate
	```

3. **Install dependencies**
	```sh
	pip install django djangorestframework django-cors-headers
	```
	- `django-cors-headers` allows cross-origin requests (CORS) for your API.

4. **Create Django project and app**
	```sh
	django-admin startproject backend .
	django-admin startapp api
	```
	- The `backend` is the main Django project.
	- The `api` app handles your API logic.

5. **Create and apply migrations**
	```sh
	python3 manage.py makemigrations api
	python3 manage.py migrate
	```

6. **Run the development server**
	```sh
	python3 manage.py runserver
	```

## Project Structure
- `backend/` - Django project root
- `backend/api/` - Django app for API endpoints
- `env/` - Python virtual environment

## Notes
- Make sure to activate your virtual environment before running any Django commands.
- Update `backend/settings.py` to add `'rest_framework'` and `'corsheaders'` to `INSTALLED_APPS`.
- Configure CORS as needed in `settings.py`.

---
