import { User } from "../model.js"
import { encrptPassword } from "./password_encryption.js"

const createUser = async (data) => {
  const {
    email, password
  } = data

  const user = new User({email})
  user.password = await encrptPassword(password)

  return user;
}

export {
  createUser
}
