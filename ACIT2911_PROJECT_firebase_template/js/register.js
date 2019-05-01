console.log('register.js is up');
//firebase cloud stuff
const firebase = require('firebase/app');
require('firebase/firestore');

var config = {
    apiKey: "AIzaSyCT-ig3IbJNgfDjoPqrOjjfrXj-pFkRuj0",
    authDomain: "acit2911-project.firebaseapp.com",
    databaseURL: "https://acit2911-project.firebaseio.com",
    projectId: "acit2911-project",
    storageBucket: "acit2911-project.appspot.com",
    messagingSenderId: "290770888287"
};
firebase.initializeApp(config);

var addData = async (user_name, email, password, re_password) => {

    if (password !== re_password) {
        //checks password whenever necessary
        return 'Password does not match.'
    } else {
        try {
            var db = firebase.firestore();

            data = {
                email: email,
                password: password,
                username: user_name,
            };

            // console.log(db.collection('accounts').doc(email).get().data());
            //checks for email if exist
            var check_email_exist = await db.collection('accounts').doc(email).get();

            // console.log(check_email_exist.data())

            if (check_email_exist.data().email === email) {
                return 'Email is already taken.'
            } else {
                db.collection('accounts').doc(email).set(data);
                return 'Account created!'
            }
        } catch (err) {
            if (err) {
                db.collection('accounts').doc(email).set(data);
                return 'Account created!'
            } else {
                console.log('Error on register.js function addData');
            }
        }

        // var user_name = document.getElementById("usrname").value;
        // var email = document.getElementById("email").value;
        // var password = document.getElementById("password").value;
            // alert("adding data");
        // db.collection("accounts").add({
        //     user_name: user_name,
        //     email: email,
        //     password: password
        // });
    }
};

var deleteData = async (email) => {
    var db = firebase.firestore();
    try {
        var accounts = await db.collection('accounts').doc(email).get();

        if (accounts.data().email === email) {
            //deletes the account
            db.collection('accounts').doc(email).delete();
            return 'Account Deleted.'
        } else {
            return 'Account not found in database.'
        }
    } catch (err) {
        if (err) {
            return 'Account not found in Database'
        } else {
            console.log('Error in register.js function deleteData')
        }
    }
};

var showData = async (email) => {
    var db = firebase.firestore();
    try{
        var accounts = await db.collection('accounts').doc(email).get();

        if (accounts.data() === undefined) {
            return ['Account not found in Database']
        } else {
            var Email = accounts.data().email;
            var Password = accounts.data().password;
            var Username = accounts.data().username;
        }

        return [
            Email,
            Password,
            Username
        ]
    } catch (err) {
        if (err) {
            return 'Account not found in Database'
        } else {
            console.log('There is an error in register.js function showData');
        }
    }
};

var updateUsername = async (email, username) => {
    var db = firebase.firestore();

    try{
        var accounts = accounts = await db.collection('accounts').doc(email).get();

        if (accounts === undefined) {
            return 'Account not found in Database'
        } else {

            var data = {
                username: username
            };

            await db.collection('accounts').doc(email).update(data);

            return 'Account username updated'
        }
    } catch (err) {
        if (err) {
            return 'Account not found in Database'
        } else {
            console.log('Error on function updateUsername')
        }
    }
};



module.exports = {
    addData,
    showData,
    deleteData,
    updateUsername
};


// var test = async () => {
//     var db = firebase.firestore();
//     return await db.collection('accounts').doc('test_do_not_delete').get()
//         .then(doc => {
//             console.log(doc.data())
//         })
//         .catch(err => {
//             console.log(`Got error: ${err}`)
//         });
// };
// const db = firebase.firestore();
// var cityRef = db.collection('accounts').doc('test_do_not_delete');
// var getDoc = cityRef.get()
//     .then(doc => {
//         if (!doc.exists) {
//             console.log('No such document!');
//         } else {
//             console.log('Document data:', doc.data());
//         }
//     })
//     .catch(err => {
//         console.log('Error getting document', err);
//     });
//
// console.log(getDoc);