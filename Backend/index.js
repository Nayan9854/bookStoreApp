import express from 'express' ;
import mongoose from 'mongoose' ;
import dotenv from 'dotenv' ;
import cors from 'cors' ;
import bookRoute from './route/book.route.js' ;
import userRoute from './route/user.route.js' ;
const app = express() ;

// CORS Configuration for deployment
const corsOptions = {
  origin: function(origin, callback) {
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://book-store-app-two-beryl.vercel.app',
      process.env.FRONTEND_URL
    ];
    
    // Allow requests from Vercel preview deployments
    if (!origin || origin.includes('vercel.app') || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(express.json()) ;
dotenv.config() ;
const PORT = process.env.PORT || 4001 ;
const URI = process.env.MongoDBURI ;
//connect to mongodb
try {
  mongoose.connect(URI) ;
  console.log("Connected to MongoDB") ;
} catch (error) {
  console.log("Error connecting to MongoDB:", error) ;
}
// defining routes
 app.use('/book', bookRoute) ;
  app.use('/user', userRoute) ;

// Health check endpoint for deployment
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) ;

