const app = require("../api/api");
const {getStorage, uploadBytes, getDownloadURL, ref} = require("firebase/storage");

const storage = getStorage(app);

const uploadImage = async (req, res) => {
    const image = req.file;
    console.log(image);
    try {
        const storageRef = ref(storage, 'profile_pics/' + image.originalname);
        const imageBuffer = fs.readFileSync(image.path);
        await uploadBytes(storageRef, imageBuffer);
        const url = await getDownloadURL(storageRef);
        console.log(url);
        res.status(200).json({message: "Image uploaded successfully"});
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Some error Occured ${error}` });
    }
};

//Download Image
const downloadImage = async (req, res) => {
    const { image } = req.body;
    try {
        const storageRef = ref(storage, 'profile_pics/' + image.name);
        const url = await getDownloadURL(storageRef);
        res.status(200).json({message: "Image uploaded successfully", url});
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: `Some error Occured ${error}` });
    }
};

module.exports = { uploadImage, downloadImage };