const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const TELEGRAM_BOT_TOKEN = '7459335683:AAHcWb91LE6M43yp9jnXhKYkPM7N7GflL0g';
const TELEGRAM_CHAT_ID = '-1002322656906';

app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.post('/api/send-message', (req, res) => {
    const { name, email, message } = req.body;
    
    const telegramMessage = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage
    })
    .then(() => {
        res.status(200).send('Message sent to Telegram');
    })
    .catch(err => {
        res.status(500).send('Error sending message');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
