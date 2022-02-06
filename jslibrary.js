
  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyAfuhfsgTpg_D7F4wOjLPSiaZsbXqdb5fY",

    authDomain: "chat-app-c1aa2.firebaseapp.com",

    projectId: "chat-app-c1aa2",

    storageBucket: "chat-app-c1aa2.appspot.com",

    messagingSenderId: "698140053043",

    appId: "1:698140053043:web:c0219915df30277e015d46",

    measurementId: "G-CD7TY05NP0"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

//firestore update
var db = firebase.firestore();

//prompt for name

if (!localStorage.getItem('name')) {
  name = prompt('What is your name?')
  localStorage.setItem('name', name)
} else {
  name = localStorage.getItem('name')
}
document.querySelector('#name').innerText = name

//Changing name

document.querySelector('#change-name').addEventListener('click', () => {
  name = prompt('What is your name?')
  localStorage.setItem('name', name)
  document.querySelector('#name').innerText = name
})