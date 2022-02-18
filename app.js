const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
app.use(cors())

const jokes = [
  "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
  "What do sprinters eat before a race? Nothing, they fast!",
  "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
  "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
  "Why couldn't the bicycle stand up by itself? It was two tired!",
  "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
  "How many apples grow on a tree? All of them!",
  "Did you hear the rumor about butter? Well, I'm not going to spread it!",
  "I like telling Dad jokes. Sometimes he laughs!",
  "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!"
]

app.get('/', (req, res) => {
  res.send('<h1>Hello!</h1> <p>Visit /joke for a random joke.</p> <p>Use query parameter ?wait to delay the response.</p> <p>Visit /error for a 500 error.</p>')
})

app.get('/error', (req, res) => {
  throw new Error("The server is down")
})

app.get('/joke', (req, res) => {
  const sec = req.query.wait; 
  // debugger
  if(Number.isInteger(parseInt(sec))){
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < parseInt(sec) * 1000);
  }
  res.send(jokes[Math.floor(Math.random() * 10)])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))