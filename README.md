!Preview(https://github.com/mdtahsinislam/Treeplant-Care_client-site/blob/be1179fdfa8f900527eefff179652a6297bffbf9/readme3.png)
---

# 🎯 Plant Care Tracker 🌿

🌿 A beautiful, responsive web app to log, track, and manage care tasks for houseplants. Users can add plants, log watering/fertilizing dates, set reminders, and monitor plant health. Built with modern React tooling, protected routes, and user authentication.

---

## 🚀 Live Website Showcase

## 🌐 live link: https://treeplant-care-app.web.app/
### 🔗 Clint site Repository: https://github.com/mdtahsinislam/Treeplant-Care_client-site
### 🔗 Server site Repository:https://github.com/mdtahsinislam/TreeplantCare_serversite

---

## 🧭 Table of Contents

* [Project Overview](#project-overview)
* [Key Features](#key-features)
* [Pages & Routes](#pages--routes)
* [Authentication Flow](#authentication-flow)
* [Data Model (Example)](#data-model-example)
* [UI / Components](#ui--components)
* [Forms & Validation](#forms--validation)
* [How to Install & Run](#how-to-install--run)
* [Deployment](#deployment)
* [Accessibility & UX Notes](#accessibility--ux-notes)
* [Contributing](#contributing)
* [License](#license)

---

## 📌 Project Overview

The Plant Care Tracker helps plant owners stay on top of care tasks (watering, fertilizing, monitoring health). The app has public and private areas. Authenticated users can add and manage their own plants, see a personalized "My Plants" page, and use reminders.

---

## ✨ Key Features

* User Authentication (Email/Password + Google/GitHub OAuth)
* Protected routes: Add Plant, My Plants, View Details, Update
* Add, Update, Delete plants with confirmation modals
* Plant listing (All Plants) in a table and responsive card layouts
* Plant detail cards with full information and next watering calculation
* Banner slider on Home with at least 3 slides
* Search, filter, and category dropdowns (e.g., succulent, fern, flowering)
* Form validation and friendly success/error toasts (no browser `alert`)
* Loading spinners while fetching data
* Creative 404 page
* Responsive design and accessible form controls

---

## 🗺 Pages & Routes

**Public**

* `/` — Home (Navbar, Banner/Slider, NewPlants, Extra Sections, Footer)
* `/all-plants` — All Plants (table view)
* `/login` — Login (email/password + OAuth)
* `/register` — Register
* `/*` — 404 page (creative)

**Private (protected)**

* `/add-plant` — Add Plant (form)
* `/my-plants` — My Plants (user's plants with Update/Delete)
* `/plants/:id` — View Details (full plant profile)
* `/plants/:id/edit` — Update Plant (prefilled form)

> Note: on attempted access to a private route while unauthenticated, redirect to `/login` and after successful login redirect back to the original route.

---

## 🔐 Authentication Flow

* Login: Email & Password + Google/GitHub sign-in option.

  * On success: redirect to the original protected route (if any); otherwise to `/`.
  * On error: show a toast or SweetAlert with error message.
* Register: Name, Email, PhotoURL, Password.

  * Password validation: at least 6 chars, must contain uppercase and lowercase letters.
  * On success: show success toast and redirect to `/`.
* Navbar conditionally shows `Login`/`Register` when logged out, or user photo with hover `displayName` and `LogOut` button when logged in.

---

## 🗄 Data Model (Example)

A plant document (e.g. in Firestore / MongoDB):

```json
{
  "_id": "abc123",
  "image": "https://.../plant.jpg",
  "plantName": "Snake Plant",
  "category": "succulent",
  "description": "Hardy, low-light tolerant plant.",
  "careLevel": "easy",
  "wateringFrequency": "every 7 days",
  "lastWateredDate": "2025-09-24",
  "nextWateringDate": "2025-10-01",
  "healthStatus": "Good",
  "userEmail": "user@example.com",
  "userName": "Md Tahsin",
  "createdAt": "2025-09-24T12:34:56.000Z"
}
```

---

## 🧩 UI / Components Suggestions

* `Navbar` — Brand logo/name, responsive links, auth area (Login/Register or avatar + logout).
* `BannerSlider` — Swiper/DaisyUI slider with 3+ slides.
* `PlantCard` — image, name, category, care level, short health chip, "View Details" button.
* `PlantsTable` — searchable/sortable table for All Plants page.
* `PlantForm` — used for Add and Update (prefill fields on Update).
* `ConfirmModal` — reusable for Delete confirmations.
* `ToastProvider` — centralized success/error toasts (e.g., react-toastify or SweetAlert2).
* `Spinner` — visible while loading.

---

## 🧾 Forms & Validation

**Register Form**

* Name (required)
* Email (required, valid email)
* PhotoURL (optional, valid URL)
* Password: required, **min 6 chars**, must contain **uppercase** and **lowercase** letters

**Add / Update Plant Form**

* Image URL (or upload flow) — required
* Plant Name — required
* Category — `<select>` with options: `Succulent`, `Fern`, `Flowering`, `Foliage`, etc.
* Description — textarea
* Care Level — `<select>`: `Easy`, `Moderate`, `Difficult`
* Watering Frequency — free text or number + unit
* Last Watered Date — `<input type="date">`
* Next Watering Date — `<input type="date">`
* Health Status — e.g. `Good`, `Sick`, `Needs Attention` (select)
* User Email & User Name — auto-filled from auth state (hidden fields)

**UX Requirements**

* Use `react-hook-form` or `Formik` + `Yup` for validation.
* Show validation messages inline and error toasts on failed submission.
* After successful add/update, show success toast (e.g., `react-toastify`) and redirect to appropriate page.
* Do NOT use `window.alert`.

---

## ✅ Example: Add Plant Success Flow

1. User fills the Add Plant form and submits.
2. Show a loading spinner while saving.
3. On success: show SweetAlert or toast: `Plant added successfully!`.
4. Redirect to `/my-plants` or `/plants/:id`.

---

## 📚 Code Snippets

**Protected Route (React Router v6)**

```jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ children }){
  const { user } = useAuth();
  const location = useLocation();

  if(!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
```

**Login Redirect Logic (after sign-in)**

```jsx
// inside Login component after successful sign-in
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || '/';

// on success
navigate(from, { replace: true });
```

**Plant Card (simplified)**

```jsx
function PlantCard({ plant }){
  return (
    <article className="card">
      <img src={plant.image} alt={plant.plantName} />
      <h3>{plant.plantName}</h3>
      <p>{plant.category} • {plant.careLevel}</p>
      <button onClick={() => navigate(`/plants/${plant._id}`)}>View Details</button>
    </article>
  );
}
```

**Delete Confirmation (SweetAlert2)**

```js
import Swal from 'sweetalert2';

function handleDelete(id) {
  Swal.fire({
    title: 'Delete this plant?',
    text: "This action cannot be undone.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      // call delete API then show success toast
    }
  })
}
```

---

## ⚙️ How to Install & Run (example)

```bash


# install
npm install

# run locally
npm run dev
# or
npm start
```

**Environment variables (example)**

```
REACT_APP_API_URL=https://api.example.com
REACT_APP_FIREBASE_API_KEY=xxx
REACT_APP_FIREBASE_AUTH_DOMAIN=xxx
```

---

## 🧪 Backend / API Notes

You can implement a simple REST API or use Firebase/Firestore. Example endpoints:

* `GET /plants` — list all plants
* `GET /plants/:id` — get plant details
* `POST /plants` — add new plant (auth required)
* `PUT /plants/:id` — update plant (auth & ownership required)
* `DELETE /plants/:id` — delete plant (auth & ownership required)

When using Firebase, secure rules so only the owner can modify/delete their plant documents.



---

## ✨ Technology Stack

* Frontend: React.js / Tailwind CSS / daisyui
* Backend: Node.js + Express.js
* Database: MongoDB
* Authentication: Firebase Authentication / JWT
* Hosting: Frontend (Client site): Firebase Hosting | Backend (Server site): Vercel Hosting
* Toaster/Alerts: react-toastify or SweetAlert2
* Slider: Swiper.js or DaisyUI Carousel
* Version Control: GitHub
---



## 🧭 Deployment

* Hosting: Frontend (Client site): Firebase Hosting | Backend (Server site): Vercel Hosting
* Version Control: GitHub

# 📝  Happy coding 🚀

---

