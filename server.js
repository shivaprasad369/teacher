// mongoose.connect('mongodb+srv://Shivaprasad:Shivu2000@cluster0.5wetoyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
// const mongoose = require('mongoose');

// server.js
const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

// Serve static files from the 'public' directory if needed
app.use(express.static('public'));

// Create an Express server and attach PeerJS
const server = app.listen(process.env.PORT || 9000, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/peerjs', // Path for PeerJS server
});

// Attach PeerJS server to Express
app.use('/peerjs', peerServer);

// Optional: Define a route for testing
app.get('/', (req, res) => {
  res.send('PeerJS Server is running!');
});
