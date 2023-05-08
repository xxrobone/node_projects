const express = require('express');
const mockData = require('./mockData');
const cors = require('cors');

const app = express();
const port = 5000;

let characters = mockData;

// adding cors to get rid of the cors policy
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:id', (req, res) => {
  const id = req.params.id;
  const numberId = parseInt(id);
  const character = characters.find((char) => char.id === numberId);

  if (!character) {
    return res
      .status(404)
      .json({ message: 'Ingen karaktär med det idt kunde hittas!' });
  }

  res.json(character);
});

app.delete('/characters/:id', (req, res) => {
  const id = req.params.id;
  const numberId = parseInt(id);

  const character = characters.find((char) => char.id === numberId);

  if (!character) {
    return res
      .status(404)
      .json({ message: 'Ingen karaktär med det idt kunde hittas!' });
  }
  const newData = characters.filter((char) => char.id !== numberId);
  characters = newData;

  res.json({ message: 'Karaktären har blivit borttagen!' });
});

let nextId = 28234;

app.post('/characters', (req, res) => {
  const character = req.body.character;

  const newCharacter = {
    ...character,
    id: nextId,
  };

  nextId++;

  characters.push(newCharacter);
  res.json(newCharacter);
});

app.put('/characters/:id', (req, res) => {
  const id = req.params.id;
  const numberId = parseInt(id);
  const character = req.body.character;

  const index = characters.findIndex((char) => char.id === numberId);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: 'Inget id matchar någon befintlig karaktär' });
  }

  const updatedCharacter = { ...characters[index], ...character };
  characters[index] = updatedCharacter;

  res.json(updatedCharacter);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
