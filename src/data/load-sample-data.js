import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
	sampleData.map(addCoffee);
}

async function addCoffee({ title, rating, datePurchased, review, shopName, tags }) {
	try {
		const data = { title, rating, datePurchased, review, shopName, tags };

		const snapshot = await db
			.collection("coffee")
			.where("title", "==", title)
			.where("rating", "==", rating)
			.where("datePurchased", "==", datePurchased)
			.where("review", "==", review)
			.where("shopName", "==", shopName)
			.where("tags", "==", tags)
			.get();

		let docRef;
		if (snapshot.empty) {
			docRef = db.collection("coffee").doc();
		} else {
			docRef = snapshot.docs[0].ref;
		}

		await docRef.set(data);
	} catch (error) {
		console.log(error);
	}
}

export default loadSampleData;
