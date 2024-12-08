import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import cloudinaryConnect from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDb()
cloudinaryConnect()

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});