# Blog-generator
# 📝 AI Blog Generator

This is a simple **AI Blog Generator** web project built using **HTML, CSS, and JavaScript**. It includes a login page and a form to simulate blog generation and publishing. 

⚠️ **Note:** Backend integration (Spring Boot + API calls) was **not completed** due to setup issues. Therefore, the project currently works as a frontend-only demo.

---

## 🔐 Admin Login (Demo Credentials)

To access the blog generation form, use:

- **Username:** `admin`  
- **Password:** `1234`

> On successful login, the user is redirected to `form.html`.

---

## 💡 Project Features

- ✅ Login authentication using static credentials
- ✅ Blog idea input and simulated blog generation
- ✅ Clean, responsive design using modern CSS
- ✅ JavaScript-based UI interaction and validation
- ❌ Backend not implemented (API calls will fail)

---

## 📂 Folder Structure

Blog-generator/
├── login.html            # Login page
├── login.css             # Login page styles
├── login.js              # JS logic for login
├── form.html             # Blog generator page
├── form.css              # Blog form styles
├── form.js               # JS for generating and publishing blog
├── screenshots/          # Folder for UI screenshots
│   ├── login-page.png
│   └── blog-form.png
└── README.md             # Project documentation



---

## 🛠 Technologies Used

- **HTML5** – structure and layout  
- **CSS3** – styling with gradients, shadows, and responsiveness  
- **JavaScript (Vanilla)** – form validation, login logic, UI events

---

## 🚫 Limitations (Current State)

- No actual connection to OpenAI or any blog-generation model
- Blog "generation" and "publishing" functions are **only simulated**
- API routes like `/generateBlog` or `/publishBlog` will **not work**
- No database or backend support yet

---

## 🛠 Why Backend Wasn’t Added?

We initially planned to implement the backend using **Java Spring Boot**, exposing REST APIs to:
- Generate AI content from OpenAI
- Save blog data to a database

However, due to technical/environment setup issues, backend development couldn’t be completed in time.

---

## ▶️ How to Use

1. Open `login.html` in your browser.
2. Login using `admin` / `1234`.
3. You will be redirected to `form.html`.
4. Enter a blog title, click "Generate" or "Publish".
   - Note: These buttons simulate actions and will not call real APIs.

---

## 📸 Optional: UI Preview

> ## 📸 UI Preview

### 🔐 Login Page
![Blog Form](screenshorts.html/login.png)

### 📝 Blog Form Page
![Blog Form](screenshorts.html/form.png)

---

## 🚀 Future Enhancements

- 🌐 Add real backend with Spring Boot
- 🤖 Integrate OpenAI for blog content generation
- 💾 Store data using MySQL or Firebase
- 🔐 Enhance login with authentication and authorization

---

## 👨‍💻 Author

Developed by a **B.Tech 2nd Year Student** as a part of a frontend prototype project.

---
