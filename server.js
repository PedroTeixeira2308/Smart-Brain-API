const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors')
require('dotenv').config();




const app = express();

app.use(express.json());
app.use(cors())


const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ],
}

app.get('/', (req, res) => {
  res.send(database.users);
});

app.post('/signin', (req, res) => {
  if(req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    // res.json('Success');
    res.json(database.users[0]);
  }else {
    res.status(400).json('error logging in!');
  }
});

app.post('/register', (req, res) => {
  const {email, name, password} = req.body;
  database.users.push({
    id: '125',
    name: name,
    email: email,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users.at(-1));
});

app.get('/profile/:id', (req, res) => {
  const {id} = req.params;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    } 
  })
  if (!found) {
    res.status(404).json("No Found");
  }
});

app.put('/image', (req, res) => {
  const {id} = req.body;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    } 
  })
  if (!found) {
    res.status(404).json("No Found");
  }
});


// New api route to communicate with clarifai
app.post('/api/clarifai/face-detect', async (req, res) => {
  try {
    const { imageUrl, modelId = 'face-detection', userId = 'clarifai', appId = 'main' } = req.body;
    if (!imageUrl) return res.status(400).json({ error: 'mandatory imageUrl' });

    const body = {
      user_app_id: { user_id: userId, app_id: appId },
      inputs: [{ data: { image: { url: imageUrl } } }]
    };

    const r = await fetch(`https://api.clarifai.com/v2/models/${modelId}/outputs`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Key ${process.env.CLARIFAI_PAT}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await r.json();
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'proxy_failed', details: e.message });
  }
});




app.listen(3000, () => {
  console.log('App is running on port 3000');
});



