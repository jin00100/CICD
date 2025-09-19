const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello from self-hosted Runner! Version 1.0')


});

app.lisen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);

});
