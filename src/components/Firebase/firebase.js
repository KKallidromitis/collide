import app from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA6wgJ0O7ksBO4RebUE8RqOi64Rp4kJwds",
  authDomain: "collide-ffff.firebaseapp.com",
  databaseURL: "https://collide-ffff.firebaseio.com",
  projectId: "collide-ffff",
  storageBucket: "collide-ffff.appspot.com",
  messagingSenderId: "367433777373",
  appId: "1:367433777373:web:ccf6ac3e9a7f158a231b34",
  measurementId: "G-TGPMYG7XK6"
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}
export default Firebase;