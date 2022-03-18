import mongoose from "mongoose"

export const LOCAL_URL = "mongodb://localhost:27017"

export const databaseConnection = () => {
  mongoose.connect(LOCAL_URL)
}