
# Django + Next.js (React) Project

This monorepo contains a Django REST API backend and a Next.js (React) frontend.

---


## Backend (Django)

**Setup (with Pipenv):**
1. Go to the backend directory:
	```sh
	cd backend
	```
2. Install dependencies (creates virtualenv automatically):
	```sh
	pipenv install --dev
	```
3. Activate the environment:
	```sh
	pipenv shell
	```
4. Run migrations:
	```sh
	python manage.py makemigrations api
	python manage.py migrate
	```
5. Run the server:
	```sh
	python manage.py runserver
	```

**Notes:**
- All dependencies are managed in `backend/Pipfile`.
- Add `'rest_framework'`, `'corsheaders'`, `'drf_yasg'`, and `'django_extensions'` to `INSTALLED_APPS` in `backend/settings.py`.
- Configure CORS in `settings.py` as needed.
- API endpoints are served from `/api/`.
- Swagger UI available at `/swagger/`.

---

## Frontend (Next.js/React)

**Setup:**
1. Go to the frontend directory:
	```sh
	cd frontend
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Start the development server:
	```sh
	npm run dev
	```
	The app will be available at [http://localhost:3000](http://localhost:3000).

**Features:**
- Uses [Next.js](https://nextjs.org/) with React 19 and TypeScript
- API requests are made to the Django backend (see `.env` for `NEXT_PUBLIC_API_URL`)
- Includes [react-hot-toast](https://react-hot-toast.com/) for notifications
- Tailwind CSS and DaisyUI for styling

**Environment Variables:**
- Set `NEXT_PUBLIC_API_URL` in `frontend/.env` to match your backend URL (default: `http://localhost:8000/`)

---


## Project Structure
- `backend/` - Django project root (with Pipfile)
- `backend/api/` - Django app for API endpoints
- `frontend/` - Next.js React frontend
---

## Development Workflow
1. Start the Django backend:
	```sh
	source env/bin/activate
	python3 backend/manage.py runserver
	```
2. In a new terminal, start the React frontend:
	```sh
	cd frontend
	npm run dev
	```

---
