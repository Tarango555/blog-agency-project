import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import {
    PORT,
    DB_CONN,
    MAX_JSON_SIZE,
    REQUEST_LIMIT_TIME,
    REQUEST_LIMIT_NUMBER,
    MESSAGE,
    URL_ENCODED,
    WEB_CACHE
} from "./app/config/config.js";
import router from "./routes/api.js";

const app= express();

// Serve static files from the "uploads" folder
app.use('/storage', express.static('storage'));

//App use default middleware
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODED}));
app.use(helmet());
app.use(cookieParser());

//App use limiter
const limiter= rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_NUMBER,
    message: MESSAGE
});
app.use(limiter);

//Cache
app.set('etag', WEB_CACHE);

//Database connection
mongoose.connect(DB_CONN, {autoIndex: true})
    .then(()=>{
        console.log("MongoDB connected");
    }).catch(()=>{
        console.log("MongoDB disconnected");
});

app.use("/api", router);

app.use(express.static('client/dist'));

//add react frontend routing
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
});

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}...`);
});