require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.static('frontend'));

// Generate Blog API
app.post('/api/generateBlog', async (req, res) => {
  const { title } = req.body;

  console.log("📥 Received title:", title);

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/responses",
      {
        model: "gpt-4.1-mini", 
        input: `Write a 300-500 word SEO-friendly blog post with headings about: "${title}"`
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    
    const content = response.data.output?.[0]?.content?.[0]?.text;

    if (!content) {
      return res.status(500).json({ error: "No content returned from AI" });
    }

    res.json({ content });

  } catch (err) {
    console.error("❌ Error generating blog:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate blog" });
  }
});

// Publish Blog API
app.post('/api/publishBlog', (req, res) => {
  const { title, content } = req.body;

  console.log("📝 Blog published:\n", title, content);

  res.json({ message: "Blog published successfully (simulated)" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
