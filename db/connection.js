const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/messageboard';
const db = monk(connectionString);

// const firebase = require('firebase/app');
// require('firebase/firestore');
// firebase.initializeApp({
//     apiKey: "AIzaSyCT-ig3IbJNgfDjoPqrOjjfrXj-pFkRuj0",
//     authDomain: "acit2911-project.firebaseapp.com",
//     databaseURL: "https://acit2911-project.firebaseio.com",
//     projectId: "acit2911-project",
//     storageBucket: "acit2911-project.appspot.com",
//     messagingSenderId: "290770888287"
// });
// const db = firebase.firestore();

module.exports = db;