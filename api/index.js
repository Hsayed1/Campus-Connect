import express from "express";
const app = express()
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import relationshipRoutes from "./routes/relationships.js";

import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import { db } from "./connect.js";

//middlewares
app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Credentials", true)

    next()
})
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client2/public/upload');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
});
  
const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), (req, res) =>{
    const file = req.file;
    res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/relationships", relationshipRoutes)



db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database!");
});

app.listen(8800, ()=>{
    console.log("API working!")
})