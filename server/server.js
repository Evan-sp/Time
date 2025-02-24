const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-haiku-20240307",
                messages: [{
                    role: "user",
                    content: req.body.message || "Hello, Anthropic!"
                }],
                max_tokens: 300
            })
        });
        
        if (!response.ok) {
            throw new Error(`API responded with status ${response.status}`);
        }
        
        const data = await response.json();
        // Extract the text content from the first message
        const messageContent = data.content[0].text;
        res.json({ message: messageContent });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching response from Anthropic API' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 