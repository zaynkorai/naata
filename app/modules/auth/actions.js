import * as t from './actionTypes';
import * as api from './api';
import firebase from "../../config/firebase";

import { Permissions, Notifications } from 'expo';

import { AsyncStorage } from 'react-native';

export function register(data, successCB, errorCB) {
    return (dispatch) => {
        api.register(data, function (success, data, error) {
            if (success) successCB(data);
            else if (error) errorCB(error)
        });
    };
}

export function createUser(user, successCB, errorCB) {
    return (dispatch) => {
        api.createUser(user, function (success, data, error) {
            if (success) {
                dispatch({ type: t.LOGGED_IN, data: user });
                successCB();
            } else if (error) errorCB(error)
        });
    };
}

export function login(data, successCB, errorCB) {
    return (dispatch) => {
        api.login(data, function (success, data, error) {
            if (success) {
                if (data.exists) dispatch({ type: t.LOGGED_IN, data: data.user });
                successCB(data);
            } else if (error) errorCB(error)
        });
    };
}

export function resetPassword(data, successCB, errorCB) {
    return (dispatch) => {
        api.resetPassword(data, function (success, data, error) {
            if (success) successCB();
            else if (error) errorCB(error)
        });
    };
}

export function signInWithFacebook(facebookToken, successCB, errorCB) {
    return (dispatch) => {
        api.signInWithFacebook(facebookToken, function (success, data, error) {
            if (success) {
                if (data.exists) dispatch({ type: t.LOGGED_IN, data: data.user });
                successCB(data);
            } else if (error) errorCB(error)
        });
    };
}

export function signOut(successCB, errorCB) {
    return (dispatch) => {
        api.signOut(function (success, data, error) {
            if (success) {
                dispatch({ type: t.LOGGED_OUT });
                successCB();
            } else if (error) errorCB(error)
        });
    };
}

export function checkLoginStatus(callback) {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            let isLoggedIn = (user !== null);

            if (isLoggedIn) {
                this.registerForPushNotificationsAsync(user)
                //get the user object from the Async storage
                AsyncStorage.getItem('user', (err, user) => {
                    if (user === null) isLoggedIn = false //set the loggedIn value to false
                    else dispatch({ type: t.LOGGED_IN, data: JSON.parse(user) })
                    callback(isLoggedIn);
                });
            } else {
                dispatch({ type: t.LOGGED_OUT });
                callback(isLoggedIn);
            }
        });
    };
}

registerForPushNotificationsAsync = async (user) => {
    const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    // POST the token to our backend so we can use it to send pushes from there
    var updates = {}
    updates['/expoToken'] = token
    await firebase.database().ref('users').child(user.uid).update(updates)
    //call the push notification 
}
