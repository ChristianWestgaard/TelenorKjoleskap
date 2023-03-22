const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBwg-aiXLJqiK0tiviv3dKhhdOH6nvUN-Q",
    authDomain: "telenokoleskap.firebaseapp.com",
    projectId: "telenokoleskap",
    storageBucket: "telenokoleskap.appspot.com",
    messagingSenderId: "883726078953",
    appId: "1:883726078953:web:9113fe99047675d471b178",
    measurementId: "G-49Y0GLE44M"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const db = getFirestore()
const database = collection(db, 'Users')
console.log(database);

function popup() {
 

    document.getElementById('hola')
            .style.display = "block";

    document.getElementById('buttonPay')
            .style.display = "none";
}