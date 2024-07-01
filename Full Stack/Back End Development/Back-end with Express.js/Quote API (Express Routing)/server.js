const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Sends a random quote back
app.get('/api/quotes/random', (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

// Sends all quotes back if no query is provided
app.get('/api/quotes', (req, res, next) => {
  if (req.query.person) {
    const quotesByPerson = quotes.filter(quote => quote.person === req.query.person);
    res.send({ quotes: quotesByPerson });
  } else {
    res.send({ quotes: quotes });
  }
});

// Adds a new quote to the quotes array
app.post('/api/quotes', (req, res, next) => {
  const { quote, person } = req.query; // extract quote and person from query string
  // if either quote or person is missing send a 400 response 
  if (!quote || !person) {
    res.status(400).send();
  } else {
    // if both are present, create a new quote object  
    const newQuote = { quote, person };
    quotes.push(newQuote); // add the new quote to the quotes array 
    res.send({ quote: newQuote }); // send back the newly added quote object  
  }
  });


// Launches a server and listens on port 4001
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});