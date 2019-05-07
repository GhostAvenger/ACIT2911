const Joi = require('joi');
const db = require('./connection');
const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required()
});

const messages = db.get("messages");

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
// const messages = db.collection('messages').doc();

// function test() {
//     var db = firebase.firestore();
//     var messages = db.collection('message').doc("wYNDTzdDkEBMDg8d2sEX").get();
//
//     var dict = messages.data();
//
//     return dict
// }

function getAll() {
    return messages.find();
    // return messages;
}

function create(message) {
    const result = Joi.validate(message, schema);
    if (result.error == null) {
        message.created = new Date();
        // return messages.insert(message);
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    getAll,
    create
};