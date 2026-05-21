const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || 'v1.0.0';

app.get('/', (req, res) => {
    if (process.env.TRIGGER_ERROR === 'true') {
        return res.status(500).json({ status: 'error', message: 'Intentional 500 Error for Rollback Test' });
    }
    res.json({
        version: VERSION,
        status: 'ok'
    });
});

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        version: VERSION,
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server ${VERSION} versiyada ${PORT}-portda eshitilmoqda...`);
});
