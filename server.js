// ted-ed api

const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/lessons', require('./routes/lessons'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
