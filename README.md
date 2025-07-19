# 🏡 Airbnb  Project (MERN Stack)

This is a full-stack Airbnb clone built using **Node.js, Express, MongoDB, and EJS** on the backend and **vanilla HTML, CSS, and JavaScript** on the frontend.

---

## 🔥 Features

- 📝 **User Authentication & Authorization**
  - JWT-based auth system with protected routes.
  - Validations on both frontend and backend.
  - Only authorized users can create, edit, or delete listings.

- 🌐 **MVC Folder Structure**
  - Clean code separation with models, views, and controllers.
  - Organized routes, middlewares, and utilities.

- 🏞️ **Image Upload via Cloudinary**
  - Secure image upload for listings.
  - Multiple image support with preview.

- 📍 **Geolocation Integration with Mapbox**
  - Users can enter a location.
  - The location is geocoded into **longitude & latitude**.
  - Map with marker is displayed using **Mapbox GL JS**.

- ➕ **Create, Edit, Delete,Update Listings**
  - Full CRUD functionality.
  - Users can manage their own listings with ease.

- 🔐 **Session Management**
  - Session cookies and flash messages handled securely.
  - Auth middleware to restrict access to certain pages.

- 🎨 **Frontend Pages**
  - Signup Page
  - Login Page
  - Home Page
  - Create Listing Page
  - Edit Listing Page
  - View Listing Page
  - Error Handling Pages

---

## 🚀 Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | HTML, CSS, JS      |
| Backend      | Node.js, Express   |
| Database     | MongoDB, Mongoose  |
| Image Hosting| Cloudinary         |
| Geocoding/Maps | Mapbox API       |
| Authentication | JWT, Bcrypt      |
| Templating Engine | EJS          |

---

## ⚙️ Setup Instructions

Note : Remember when you host/open start with "/listings" at the end of your url.There is nothing in "/" root directory.

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/asmi-04/airbnb.git
   cd airbnb

2. **Install Dependencies in Bash**
3. ```bash
   npm install

3.**Set up Environment Variables**
  Create a .env file and add:

DATABASE_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
MAPBOX_TOKEN=your_mapbox_token
JWT_SECRET=your_jwt_secret

🧑‍💻**Author**
Built with ❤️ by Asmi Jain

