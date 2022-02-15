import express from 'express';

import router from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/users', router);

app.get('/', (req, res) => {
    console.log('TEST!');
    res.send('Hello from homepage');
});

app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));