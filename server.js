/* TED-Ed API
 * Express server code for API */
const express = require('express');
const app = express();
const PORT = 8000;

// Swagger UI imports for API documentation
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Use Express's JSON middleware
app.use(express.json());

// The API root will serve the static Swagger UI docs
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/lessons', require('./routes/lessons'));
app.use('/series', require('./routes/series'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
