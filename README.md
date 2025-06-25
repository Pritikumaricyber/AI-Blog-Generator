# Blog-generator
# 📝 AI Blog Generator

This is a full-stack web application that lets users generate blog posts using AI. Just enter a blog title or idea, click **Generate**, and get a complete blog post powered by OpenAI’s `gpt-3.5-turbo` model.

---

## 🔐 Admin Login (Demo Credentials)

To access the blog generation form, use:

- **Username:** `admin`  
- **Password:** `1234`

> On successful login, the user is redirected to `form.html`.

---

## 💡 Project Features

- 🧑 Simple login entry screen
- 🎯 User inputs a blog title or topic
- 🤖 Backend calls OpenAI to generate blog content
- 📝 Result displayed in a textarea for review
- 🔐 Secure key handling with `.env` (not exposed)
- 🛠️ Simulated publishing feature (console log)
- 
---

## 📂 Folder Structure

Blog-generator/
├── public/
│ ├── login.html # Initial login page
│ ├── login.css # Login page styling
│ ├── login.js # Login page logic
│ ├── form.html # Blog generator UI
│ ├── form.css # Styling 
│ ├── form.js # Script 
├── index.js # Node.js backend
├── .env # API key  (not committed for security reasons)
├── .gitignore # Ignores .env and node_modules
├── README.md # Project documentation


---

## 💻 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **AI Integration**: OpenAI API (`gpt-3.5-turbo`)
- **Environment**: `.env` file with `dotenv` package
  
---

## ⚙️ How to Run

### 1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/ai-blog-generator.git
cd ai-blog-generator

### 2. Install Dependencies
bash
Copy code
npm install

### 3. Create a .env File
Create a .env file in the project root and add your OpenAI API key:
env
Copy code
OPENAI_API_KEY=your-openai-api-key-here
⚠️ The .env file is intentionally excluded from this repo for security reasons.

### 4. Start the Backend Server
bash
Copy code
node index.js
You should see in your terminal:
🚀 Server running at http://localhost:5000

### 5. Open the Login Page in Browser
Visit:
bash
Copy code
http://localhost:5000/login.html
Enter your name → click Login → you’ll be redirected to the blog generation tool.


---
## ▶️ How to run
1. Open `login.html` in your browser.
2. Login using `admin` / `1234`.
3. You will be redirected to `form.html`.
4. Enter a blog title, click "Generate" or "Publish".

---

## 📌 Notes

- OpenAI API quota is required (free or paid)
- If API fails, you'll see a 500 Internal Server Error
- You can simulate blog publishing (console log)

---

