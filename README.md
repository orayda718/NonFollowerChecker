# NonFollowerChecker | Instagram Followers Analyzer

An application that allows users to upload their Instagram `followers.json` and `following.json` files to analyze and identify users they are following who are not following them back.

## Live Demo

Check out the live application here: [Instagram Followers Analyzer](https://nonfollowerchecker.onrender.com)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [How to Obtain Instagram Data](#how-to-obtain-instagram-data)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Upload Instagram `followers.json` and `following.json` files.
- Analyze and display users you follow who do not follow you back.
- Responsive and user-friendly interface.
- Instructions on how to download your Instagram data.
- Secure file handling and data privacy.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/orayda718/NonFollowerChecker.git
   cd NonFollowerChecker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the application**

   ```bash
   npm start
   ```

4. **Access the application**

   Open your browser and navigate to `http://localhost:3000`.

## Usage

### How to Obtain Instagram Data

**Note**: Ensure you have your `followers.json` and `following.json` files ready.

#### Steps to Download Your Instagram Data:

1. **Request Your Data from Instagram**

   - **Mobile App**:
     - Go to your profile and tap the menu icon.
     - Navigate to **"Settings and privacy"** > **"Download your information"**.
     - Select **"JSON"** format and submit the request.
   - **Web Browser**:
     - Log in to [Instagram.com](https://www.instagram.com).
     - Go to **Settings** > **Privacy and Security** > **Data Download**.
     - Select **"JSON"** format and submit the request.

2. **Receive the Download Link**

   - Instagram will email you a link to download your data. This may take some time.

3. **Download and Extract the Data**

   - Download the ZIP file and extract its contents.

4. **Locate the Required JSON Files**

   - Navigate to the `followers_and_following` directory.
   - Find `followers.json` and `following.json`.

### Using the Application

1. **Upload Files**

   - On the home page, upload your `followers.json` and `following.json` files.

2. **Analyze**

   - Click on the **"Analyze"** button.

3. **View Results**

   - The application will display a list of users you are following who are not following you back.

## Deployment

The application can be deployed using platforms like Render, Railway, or Heroku.

### Deploying to Render

1. **Create an Account on Render**

   - Sign up at [Render.com](https://render.com).

2. **Connect Your Repository**

   - Create a new Web Service and connect your GitHub repository.

3. **Configure Build and Start Commands**

   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Deploy**

   - Follow the on-screen instructions to deploy your application.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Express](https://expressjs.com/) - Web framework for Node.js
- [EJS](https://ejs.co/) - Embedded JavaScript templating
- [Bootstrap](https://getbootstrap.com/) - CSS framework for styling
- [Multer](https://github.com/expressjs/multer) - Middleware for handling file uploads

## Acknowledgments

- Icons by [Font Awesome](https://fontawesome.com/).
- Fonts by [Google Fonts](https://fonts.google.com/).
