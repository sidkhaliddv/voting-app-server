import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const encrptPassword = async (password) => {
  if (password.length < 2 || password.length > 10) {
    throw "password should be atleast 2 to at max 10 characters long"
  }
  
  const hash = await bcrypt.hash(password, SALT_ROUNDS)
  return hash
}

export {
  encrptPassword
}
