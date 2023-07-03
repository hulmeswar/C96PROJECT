var firebaseConfig = {
    apiKey: "AIzaSyDHbDp2fCJ7rt-QpUVEgvDzvmz_1lWzt24",
    authDomain: "c93project-552ad.firebaseapp.com",
    databaseURL: "https://c93project-552ad-default-rtdb.firebaseio.com",
    projectId: "c93project-552ad",
    storageBucket: "c93project-552ad.appspot.com",
    messagingSenderId: "737716520006",
    appId: "1:737716520006:web:06d816bd89fb848cc5b647",
    measurementId: "G-CSETP2JBS8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id='"+Room_names+"'onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!";

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html"
}