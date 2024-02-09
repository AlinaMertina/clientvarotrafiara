// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Schema = mongoose.Schema;
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000',
}));
mongoose.connect('mongodb://localhost:27017/systememessagerie', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connexion à MongoDB réussie');
        // Démarrer votre serveur ici
    })
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB :', err.message);
        // Gérer l'erreur de connexion ici
    });
const messageSchema = new mongoose.Schema({
  from: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  to: {
    type: Schema.Types.ObjectId,
    required: false,
    unique: true,
  },
  content: {
    type: String,
    required: false,
    unique: true,
  },
  creat_at: {
    type: Date,
    default: Date.now,
  },
  read_at: {
    type: Date,
    required: false,
  },
});

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: false,
//   },
//   email: {
//     type: String,
//     required: false,
//     unique: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const User = mongoose.model('User', userSchema);
const Message = mongoose.model('message', messageSchema);

app.get('/', (req, res) => {
  res.send('App is Working');
});
app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      res.send(req.body);
      console.log(result);
    } else {
      console.log('User already registered');
    }
  } catch (error) {
    console.error('Something Went Wrong', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/writemessage', async (req, res) => {
  try {
    const message = new Message(req.body);
    let result = await message.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      res.send(req.body);
      console.log(result);
    } else {
      console.log('Message enregistrer');
    }
  } catch (error) {
    console.error('Something Went Wrong', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/getallmessages/:id', async (req, res) => {
  const idclient =parseInt(req.params.id);

  console.log("idclient");
  console.log(idclient);
  try {
    // Utilisez simplement idclient sans conversion si vous savez que c'est une chaîne représentant un ObjectId
    const messages = await Message.find({ from: idclient, to: idclient });
    res.json(messages);
  } catch (error) {
    console.error('Something Went Wrong', error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
