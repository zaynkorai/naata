const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

//send the push notification 
exports.sendPushNotification = functions.firestore.document('Posts').onUpdate(event => {

        const root = event.data.ref.root
        var posts = []

        //return the main promise 
        return root.child('/users').once('value').then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var expoToken = childSnapshot.val().expoToken;
                if (expoToken) {
                    posts.push({
                        "to": expoToken,
                        "sound": "default",
                        "body": "New Post Received "
                    });
                } else {
                    throw new Error("error")}
                    
            });
            //firebase.database then() respved a single promise that resolves
            return Promise.all(posts)

        })
            .then(posts => {
                fetch('https://exp.host/--/api/v2/push/send', {
                    
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(posts)

                });
            })
            .catch(reason => {
                console.log(reason)
            })


    });