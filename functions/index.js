const functions = require('firebase-functions');
var fetch = require('node-fetch')

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


//send the push notification 
exports.sendPushNotification = functions.database.ref('status/')
    .onCreate(event => {

        const root = event.data.ref.root
        var status = []

        //return the main promise 
        return root.child('/users').once('value').then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                var expoToken = childSnapshot.val().expoToken;
                if (expoToken) {
                    status.push({
                        "to": expoToken,
                        "sound": "default",
                        "body": "New Status Added"
                    })

                }
            })

            //firebase.database then() respved a single promise that resolves
            //once all the status have been resolved 
            return Promise.all(status)

        }).then(status => {
                // console.log(status)
                return fetch('https://exp.host/--/api/v2/push/send', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(status)
                })
                    .catch(reason => {
                        console.log(reason)
                    })



            })
    })

