var config = {
  apiKey: "AIzaSyDmgrxLbFUMuFiQlQRiqEbtd_6jmH7JIks",
  authDomain: "ingenieriaweb-e8087.firebaseapp.com",
  databaseURL: "https://ingenieriaweb-e8087.firebaseio.com",
  projectId: "ingenieriaweb-e8087",
  storageBucket: "ingenieriaweb-e8087.appspot.com",
  messagingSenderId: "197604555190"
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});
