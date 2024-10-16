const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('LinedkedIn Notifications');
});

app.get('/notifications', (req, res) => { 
    const notifications = {
        "network": Math.floor(Math.random() * 1000),
        "jobs": Math.floor(Math.random() * 100),
        "messaging": Math.floor(Math.random() * 10),
        "notifications": Math.floor(Math.random() * 1000)
    }
    res.json(notifications);
})

app.listen(port, () => { 
    console.log(`Listening on port ${port}`);
})