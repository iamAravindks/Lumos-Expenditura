import dotenv from "dotenv";

dotenv.config();

export default {
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_LOCALHOST_URL:process.env.MONGODB_LOCALHOST_URL
};
