import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyARbj7qlcJWv7eqHDpT7ToIE1oqhL_aAEs",
	authDomain: "code-sprint-b.firebaseapp.com",
	databaseURL: "https://code-sprint-b.firebaseio.com",
	projectId: "code-sprint-b",
	storageBucket: "code-sprint-b.appspot.com",
	messagingSenderId: "352816180060",
	appId: "1:352816180060:web:a453c102a672f470876f99",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const coffeeCollection = db.collection("coffee");

export default db;
export { coffeeCollection, firebase };
