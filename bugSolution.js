```javascript
//Correct usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  //Check if the user is authenticated.  The listener will only trigger when user state changes.
  if(user){
    //User is signed in. Execute your code here
    //Detach the listener after initial authentication if necessary to prevent further triggers
    //firebase.auth().onAuthStateChanged = null; //remove listener
  }else{
    //User is signed out. Execute your code here
  }
});
```