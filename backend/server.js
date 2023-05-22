import express from 'express';
import * as dotenv from 'dotenv'
import authServer from './routes/authRoute.js'
import shopRoute from './routes/shopRoute.js'
import cartRoute from './routes/cartRoute.js'
import {connectDB} from './config/db.js'
import { errorHandler } from './middleware/errorHandler.js';
import cookies from 'cookie-parser'
dotenv.config()

connectDB()
const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded())
app.use(cookies())
app.use('/api/user', authServer)
app.use('/api/shop', shopRoute)
app.use('/api/cart', cartRoute)

app.use(errorHandler)

app.listen(PORT,() => console.log(`Server started on ${PORT}`))