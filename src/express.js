/**
 * In this tutorial are some examples, on how to use the framework Express.js
 */

/** impot the express framework and the bodyparser */
const express = require('express')
const bodyParser = require('body-parser');

/** get the app object to work on */
const app = express()

/** defining the port */
const port = 3000

/** setting the bodyParser to json in order to parse the bodies of post requests */
app.use(bodyParser.json({ extended: true }));

/** defining a simple get method that sends Hello World */
app.get('/hello-world', (req, res) => {
  res.send('Hello World!')
})

/** defining a simple post method that send the received body */
app.post('/post', (req, res) => {
  res.send(req.body)
})

/** defining a simple put method that send reponse status 204 without content */
app.put('/put', (req, res) => {
  res.sendStatus(204)
})

/** defining a simple delete method that send reponse status 204 without content */
app.delete('/delete', (req, res) => {
  res.sendStatus(204)
})

/** Starting the app */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/**
 * References:
 * https://expressjs.com/en/starter/hello-world.html
 * https://stackabuse.com/get-http-post-body-in-express-js/
 */