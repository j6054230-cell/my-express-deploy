const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Siz hozir ${process.env.NODE_ENV || 'development'} muhitidasiz!`);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        version: process.env.npm_package_version || '1.0.0',
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda eshitilmoqda...`);
});
