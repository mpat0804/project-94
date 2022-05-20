//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBXB51ZDpY_D4k3t6Qg836Ha2d7IEYSQ9I",
      authDomain: "type-pure.firebaseapp.com",
      projectId: "type-pure",
      storageBucket: "type-pure.appspot.com",
      messagingSenderId: "367581281627",
      appId: "1:367581281627:web:c604274f7faba6c9c32e7e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
