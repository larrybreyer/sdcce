import mongoose from 'mongoose'
import {} from 'dotenv/config';

const connectDB = (url) =>  {
  return mongoose.connect(url);
}

export default connectDB
// vim: ai ts=2 et nu
