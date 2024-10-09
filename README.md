# DALL·E Based Image Generation Platform

This is a full-stack image generation platform built using React (with Vite), Express, MongoDB, and Cloudinary. The platform uses the OpenAI API to generate images based on user prompts and showcases the last generated images. Users can also view previously generated images saved in a MongoDB database and hosted on Cloudinary.

## Features

- Generate images based on user prompts using OpenAI's API.
- Display the most recent images on the homepage.
- Store generated images in MongoDB and Cloudinary.
- RESTful API with CRUD operations for image data.
- Responsive UI built with React and Vite.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Cloudinary:** For image hosting and storage.
- **OpenAI API:** For generating images based on prompts.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [Cloudinary Account](https://cloudinary.com/)
- [OpenAI API Key](https://beta.openai.com/signup/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/utkarshanand07/Dall-E-Based-Image-Generation-Platform.git
cd Dall-E-Based-Image-Generation-Platform
```

2. Install Dependencies
For the frontend (React + Vite)
```bash
cd client
npm install
```

For the backend (Express)
```bash
cd ../server
npm install
```

3. Set Up Environment Variables
Create a .env file in the server directory and add the following variables:

```bash
# MongoDB connection string
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>

# OpenAI API key
OPENAI_API_KEY=<your_openai_api_key>

# Server port
PORT=5000
```

4. Running the Project
Start the backend server

```bash
cd server
npm run dev
```

Start the frontend (Vite React app)
In a separate terminal:

```bash
cd client
npm run dev
```

The backend will be running on http://localhost:5000 and the frontend will be running on http://localhost:5173.

5. Usage
Open the frontend at http://localhost:5173 in your browser.
Use the input field to type a prompt and generate images using OpenAI's DALL·E model.
The generated image will be displayed on the page, and the most recent images will be stored in MongoDB and displayed on the homepage.
