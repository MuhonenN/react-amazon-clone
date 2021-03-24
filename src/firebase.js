import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDL0VlUs8uq9Tk9NWmb0nCFBBjYByTOHaA",
    authDomain: "react--clone-703ba.firebaseapp.com",
    projectId: "react--clone-703ba",
    storageBucket: "react--clone-703ba.appspot.com",
    messagingSenderId: "704358291570",
    appId: "1:704358291570:web:d93dcd8c5adaf188bfcaeb"
})

const auth = firebase.auth()

export { auth }