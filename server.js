// mongoose.connect('mongodb+srv://Shivaprasad:Shivu2000@cluster0.5wetoyi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
// const mongoose = require('mongoose');

// server.js
const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();

const server = app.listen(9000, () => {
  console.log('Server is running on port 9000');
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use('/peerjs', peerServer);
