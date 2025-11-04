import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js'; // ✅ Make sure this file exists

const app = express();
const port = process.env.PORT || 4000;

// ✅ MIDDLEWARE
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ DATABASE CONNECTION
connectDB();

// ✅ ROUTES
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('API WORKING');
});

// ✅ START SERVER
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
