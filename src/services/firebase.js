import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyCPQuSO-sRAMajUT-L4Pgl-3jdc8caWmew",
	authDomain: "mothergirth-327a5.firebaseapp.com",
	databaseURL: "https://mothergirth-327a5.firebaseio.com",
	projectId: "mothergirth-327a5",
	storageBucket: "mothergirth-327a5.appspot.com",
	messagingSenderId: "807456386997"
};


firebase.initializeApp(config)
const storage =  firebase.storage()
const database = firebase.database()
const auth = firebase.auth()

export {
  database,
	storage,
	auth
}