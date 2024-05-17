const { getFirestore, collection, getDocs } = require("firebase/firestore");
const app = require("../api/api");

const db = getFirestore(app);

const tipsController = async (req, res) => {
  var tipslist = [];
   
  const tips = collection(db, "tips");
  const querySnapshot = await getDocs(tips);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    tipslist.push(doc.data());
  });

  res.status(200).json(tipslist);
}

module.exports = { tipsController };