import firebase from '../../../../config/firebase'

function getUser() {

  var user = firebase.auth().currentUser;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      userId = profile.uid;
      name = profile.displayName

    });
  }

  return {
    userId,
    name,
  };
}
export default getUser;
