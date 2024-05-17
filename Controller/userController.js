const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } = require("firebase/auth");
const { getFirestore, setDoc, getDoc, doc } = require("firebase/firestore");
const app = require("../api/api");

const auth = getAuth(app);
const db = getFirestore(app);

const creatingUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userRecord = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userRecord.user) {
      const data = {
        user_id: userRecord.user.uid,
        username: username,
        email: email
      };
      await setDoc(doc(db, "users", userRecord.user.uid), data);
      res.status(200).json({username, email, user_uid: userRecord.user.uid, message: "User has been successfully created!"});
    } else {
      res.status(401).json({ message: "This email is already in use!!!" });
    }
  } catch (error) {
    res.status(200).json({message: `Some error occured ${error}`})
    console.log(error);
  }
};

// Sign in a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await signInWithEmailAndPassword(auth, email, password);
    if (userRecord.user) {
      const user = await  getDoc(doc(db, "users", userRecord.user.uid)); 
      const username = user.data().username;
      const imageUrl = user.data().imageUrl;
      res.status(200).json({username, email, user_uid: userRecord.user.uid, imageUrl, message: "User is successfully signed in"});
    } else {
      res.status(401).json({ message: "Invalid Credentials!!" });
    }
  } catch (error) {
    if (error.code === "auth/invalid-login-credentials") {
      res.status(401).json({ message: "Invalid credentials" });
    } else {
      res.status(500).json({ message: "An error occurred" });
    }
  }
};

const signingOut = async (req, res) => {
  try {
   const user = auth.currentUser;
   if (user) {
    await signOut(auth);
    res.status(200).json({message: `User ${user.uid} signed out successfully.`});
   } else {
    res.status(401).json({message: `User is already signed out`});
   }
  } catch(error) {
    res.status(500).json({ message: `Some Error Occured ${error}` });
  }
};

const passwordReset = async (req, res) => {
  const { email } = req.body;
  try {
    sendPasswordResetEmail(auth, email)
    .then(() => {
    res.status(200).json({message: "Password Reset mail has been sent"});
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      res.status(401).json({message: `${errorCode} ${errorMessage}`});
    });
  } catch(error) {
    res.status(500).json({ message: "Some error Occured!!" });
    console.log(error);
  }
};

module.exports = { creatingUser, loginUser, signingOut, passwordReset };
