//variables
let myFlashcards=[ 
{
    'question':'Does the sun rise in the east?',
    'answer':'Yes.'
},
{
    'question':'Is New York the capital of the U.S.A?',
    'answer':'No.'
},
{
    'question':'How many days are there in March?',
    'answer':'31.'
}
];

  

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCeFosFcyyPNKGUEz418IyC81MuU8InTPk",
    authDomain: "best-learning-tool-b4a83.firebaseapp.com",
    databaseURL: "https://best-learning-tool-b4a83-default-rtdb.firebaseio.com",
    projectId: "best-learning-tool-b4a83",
    storageBucket: "best-learning-tool-b4a83.appspot.com",
    messagingSenderId: "88761799029",
    appId: "1:88761799029:web:64dd8e3001c4c197b1033c",
    measurementId: "G-F288JZHDS9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
let dbLocation = firebase.database().ref('deck/flashcards');

// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten 
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);
