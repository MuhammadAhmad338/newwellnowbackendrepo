const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const dotenv = require("dotenv");
dotenv.config();

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = process.env.API_KEY;

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const palmController = async (req, res) => {
  const { prompt } = req.body;
  try {
    let messages = [{ content: `Provide detailed information on the following drug: ${prompt}. 
    Include its effects, side effects, usage instructions, and alternate tablet and drugs. Give the answer in titles` }];

    const result = await client.generateMessage({
      model: MODEL_NAME,
      prompt: { messages },
    });

    res.status(200).json({message: result[0].candidates[0].content});
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: `Some error Occurred ${error}` });
  }
};


module.exports = { palmController };
