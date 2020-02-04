import app from 'firebase/app';
import 'firebase/auth';
import FirebaseContext from './context';
import 'firebase/database';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
    // this.storage = app.storage();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
    
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => {
    this.auth.signOut()
  };

  saveToDatabase = () => {
    // var storage = this.storage();
  this.db.ref('users/' + "SXKJ2uSJOEW8iS76MKlNu1cOBk22").set({
    fdsa: "blah",
  });
  }

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);
}
export default Firebase;
export { FirebaseContext };