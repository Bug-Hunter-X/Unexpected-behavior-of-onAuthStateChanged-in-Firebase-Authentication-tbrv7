# Unexpected onAuthStateChanged Behavior in Firebase Authentication
This repository demonstrates a common error encountered when using Firebase's `onAuthStateChanged` method. The issue arises from the listener triggering multiple times, causing unexpected behavior in the application.
The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected implementation. 
This demonstrates how to properly handle the authentication state changes, ensuring that code executes only once when the user's authentication status changes.