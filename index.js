const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const router = require("./Routes/userRoutes");
const palmRouter = require("./Routes/palmRoutes");
const tipsRouter = require("./Routes/tipsRoutes");
const imageRouter = require("./Routes/imageRoutes");
const medicalRouter = require("./Routes/medicalRoutes");
const emergencyRouter = require("./Routes/emergencyRoutes");

const app = express();

const PORT = parseInt(process.env.PORT) || 3000;

app.use(express.json());
app.use(cors());
bodyParser.json();

app.use("/api/users", router);
app.use("/api", palmRouter);
app.use("/api", tipsRouter);
app.use("/api", imageRouter);
app.use("/api", medicalRouter);
app.use("/api", emergencyRouter);

app.listen(PORT, () => {
  console.log(`Server is Listening at the the port ${PORT}`);
});
