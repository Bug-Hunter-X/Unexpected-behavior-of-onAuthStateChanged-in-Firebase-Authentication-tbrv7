```javascript
//Incorrect usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  //This code will run every time the auth state changes.
  //If you only want to run once when the user is authenticated, use a conditional
  if(user){
    //User is signed in.
  }else{
    //User is signed out.
  }
});
```