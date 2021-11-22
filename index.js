import express from "express";
import mongoose from "mongoose";
import router from "./Router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL = `mongodb+srv://nodejs:927261033y@cluster0.15wgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(express.urlencoded({extended: true}))
app.use(fileUpload({}));
app.use("/api", router);


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
    } catch (e) {
        console.log(e)
    }
}

startApp()
