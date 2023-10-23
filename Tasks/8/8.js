// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
//
// const firebaseConfig = {
//     apiKey: "AIzaSyAMW-P_tQfiOgNl1AfDdI74ruYdgow0FUQ",
//     authDomain: "lab-97d8d.firebaseapp.com",
//     projectId: "lab-97d8d",
//     storageBucket: "lab-97d8d.appspot.com",
//     messagingSenderId: "494736102493",
//     appId: "1:494736102493:web:84cc1d4ccd1df67b7969b4",
//     measurementId: "G-ZEYEXE3K1X"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const btn = document.getElementById('btn');
const popUp = document.getElementById('pop-up');

btn.addEventListener('click', () => {
    console.log('click');
    popUp.style.display = 'block';
    btn.style.display = 'none';
})