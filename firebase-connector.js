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
    apiKey: "AIzaSyD2Vg8heDLMprUNCLPmYpHFEPyzK8YxykE",
    authDomain: "flashcards-test-v.firebaseapp.com",
    databaseURL: "https://flashcards-test-v-default-rtdb.firebaseio.com",
    projectId: "flashcards-test-v",
    storageBucket: "flashcards-test-v.appspot.com",
    messagingSenderId: "734439978721",
    appId: "1:734439978721:web:fdea61f4c8001c5bb769a0",
    measurementId: "G-W0QDFLL7E3"
  };
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




firebase.database().ref();  // Specifies the database root


// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
let dbLocation = firebase.database().ref('deck/flashcards');

// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten 
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);
