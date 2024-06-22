const express = require('express')
const path = require('path');
const PORT = 3000;
const app = express();

// in order to get email and password from form to actually show up in request
app.use(express.urlencoded());

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname,'../client/index.html'))
})

app.post('/api/login', (req,res) => {
  console.log(req.body)
  res.redirect('/')
})

/**
 * 404 handler
 */
app.use('*', (req,res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT,() => console.log(`Listening on port ${PORT}...`))

module.exports = app;