const firebaseConfig = {
  apiKey: "AIzaSyAHxMOXo0lK1j3U0GPGh-pZvXcZQUOdyUE",
  authDomain: "ecb-sim.firebaseapp.com",
  databaseURL: "https://ecb-sim-default-rtdb.firebaseio.com",
  projectId: "ecb-sim",
  storageBucket: "ecb-sim.firebasestorage.app",
  messagingSenderId: "223054973598",
  appId: "1:223054973598:web:131dcf8cc2cc4878a1c98f",
  measurementId: "G-KEXH9FNSS5"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
async function ecbConnect(){ await auth.signInAnonymously(); return auth.currentUser; }
function ecbRef(session){ return db.ref("sessions/"+session); }
