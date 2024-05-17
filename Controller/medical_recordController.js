const { getFirestore, collection, getDocs, addDoc } = require("firebase/firestore");
const app = require("../api/api");
const db = getFirestore(app);


const get_medical_records = async (req, res) => {
  try {
    var medical_recordlist = [];

    const medical_record = collection(db, "medical_record");
    const querySnapshot = await getDocs(medical_record);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      medical_recordlist.push(doc.data());
    });

    res.status(200).json(medical_recordlist);
  } catch (error) {
    console.log(error);
  }
};

//Post medical_record
const post_medical_record = async (req, res) => {
  try {
    const medical_record = req.body;
    console.log(medical_record);
    const medical_recordRef = await addDoc(
      collection(db, "medical_record"),
      medical_record
    );
    res.status(200).json(medical_recordRef);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get_medical_records, post_medical_record };
