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

//Saving messages
document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault()

  let message = document.querySelector('#message-input').value
  db.collection('messages')
  .add({
    name: name,
    message: message,
    date: firebase.firestore.Timestamp.fromMillis(Date.now())
    })
  .then(docRef => {
    console.log(`Document written with ID: ${docRef.id}`)
    document.querySelector('#message-form').reset()
  })
  .catch(error => {
    console.log(`Error adding document: ${error}`)
  })
})

  //Form event listener
document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault();
  let message = document.querySelector('#message-input').value 
})

//Realtime listner
db.collection('messages')
.orderBy('date', 'asc')
.onSnapshot(snapshot => {
  document.querySelector('#messages').innerHTML = ''
  snapshot.forEach(doc => {
    let message = document.createElement('div')
    message.innerHTML = `
    <p class="name">${doc.data().name}</p>
    <p>${doc.data().message}</p>
    `
    document.querySelector('#messages').prepend(message)
  })
})

//Delete Event Listner
document.querySelector('#clear').addEventListener('click', () => {

})
  