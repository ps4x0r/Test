
var submitBtn = document.getElementById("submitBtn");

function submitClick() {
   
   var email = document.getElementById("email");
    var password = document.getElementById("password")
    email = email.value;
    password = password.value;

    if (email.value == '') {
        alert('Provide email');
        return false;
    }

    if (password.value == '') {
        alert('Provide password');
        return false;
    }


    //firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    //    // Handle Errors here.
    //    var errorCode = error.code;
    //    var errorMessage = error.message;
    //    console.log("error code: " + errorCode);
    //    console.log("error message: " + errorMessage);
    //    // ...
    //});

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid);
            // User is signed in.
        } else {
            // No user is signed in.
        }
    });
   
    
}

