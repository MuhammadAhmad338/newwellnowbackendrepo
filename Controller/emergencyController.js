const { getFirestore, collection, getDocs, addDoc } = require("firebase/firestore");
const app = require("../api/api");
const db = getFirestore(app);

const postemergencyContact = async (req, res) => {
    const { name, phoneNumber } = req.body;
    try {
        const docRef = await addDoc(collection(db, "emergencyContact"), {
            name,
            phoneNumber
        });
        console.log("Document written with ID: ", docRef.id);
        res.status(200).json({ message: docRef.id });
    } catch (error) {
        console.log(error);
    }
}

const getemergencyContact = async (req, res) => {
    try {
        const querySnapshot = await getDocs(collection(db, "emergencyContact"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        res.status(200).json({ message: data });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { postemergencyContact, getemergencyContact };

