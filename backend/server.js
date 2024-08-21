import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import connectDB from "./config/dbConnect.js";
import postRoute from "./routes/post.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;


var whitelist = ['http://localhost:3000/', 'https://post-creator-assignment.onrender.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(express.urlencoded({ extended: true }));
app.use(
  cors(corsOptions)
);
app.use(express.json());

morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(
    ':method :status :url :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  )
);


app.use("/api/posts", postRoute);

if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // react app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

process.on("uncaughtException", function (err) {
  console.log(err);
  process.exit(1);
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
