import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';
import connectDB from "./config/dbConnect.js";
import postRoute from "./routes/post.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: '*', // or '*' to allow all origins
}));

app.use("/api/posts", postRoute);  
 
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Server is Ready"));
}

process.on("uncaughtException", function (err) {
  console.log(err);
  process.exit(1);
}); 
 
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
 