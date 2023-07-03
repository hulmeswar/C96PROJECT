//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyC2Aqyv2CyzFaR7tMSib6ZwVK_DUd-gdsg",
    authDomain: "test-d7cbd.firebaseapp.com",
    databaseURL: "https://test-d7cbd-default-rtdb.firebaseio.com",
    projectId: "test-d7cbd",
    storageBucket: "test-d7cbd.appspot.com",
    messagingSenderId: "646977054619",
    appId: "1:646977054619:web:c0509160dc2709a10a633e",
    measurementId: "G-4YXE3PMDHC"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig); 
   user_name = localStorage.getItem("user_name");  
   room_name = localStorage.getItem("room_name");  
   
   function send()
   {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
           name:user_name,
           message:msg,
           like:0
       });
       document.getElementById("msg").value = "";
   }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code


//End code
 } });  }); }
getData();
function logout(){

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}