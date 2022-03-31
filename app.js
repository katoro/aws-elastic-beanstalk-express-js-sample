const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res
) => res.send('Hello World! AWSㅁㅈ워ㅏㅁ주아ㅓㅁㅈ!미ㅓㅏㅇ마저우ㅏ머주아ㅓ'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
