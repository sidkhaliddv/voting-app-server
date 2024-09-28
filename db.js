import { connect } from 'mongoose'

const  connectDB = async () => {
  try {
    await connect(process.env.MONGO_DB_URL)
    console.log('database is connected now!')
  } catch {
    console.log('database connection was not successfull')
  }
}

export {
  connectDB
}

