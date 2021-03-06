function facebookLogin() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("Facebook user > " + JSON.stringify(user));
      // ...
  }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log("Error > " + error);
  });
}

function onLoadFile() {
  var storage = firebase.storage();
  var storageRef = firebase.storage().ref();

  var file = document.getElementById('uploadBtn').files[0];
  var thisRef = storageRef.child('NewFiles/' + file.name);

  thisRef.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
  })
}