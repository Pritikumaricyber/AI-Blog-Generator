require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/generateBlog', async (req, res) => {
  const { title } = req.body;
  console.log("📥 Received title:", title);

  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful blog-writing assistant.' },
        { role: 'user', content: `Write a blog post about: "${title}"` }
      ],
      temperature: 0.7,
      max_tokens: 700
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    const content = response.data.choices?.[0]?.message?.content?.trim();
    if (!content) return res.status(500).json({ error: "No content returned from OpenAI" });
    res.json({ content });

  } catch (err) {
    console.error("❌ Error generating blog:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate blog" });
  }
});

app.post('/api/publishBlog', (req, res) => {
  const { title, content } = req.body;
  console.log("📝 Blog published:
", title, content);
  res.json({ message: "Blog published successfully (simulated)" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
