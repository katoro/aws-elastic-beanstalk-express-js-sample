const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res
) => res.send('<H1>Hello world, Any Company Homepage</H1>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
