import { createUser } from "./services/user.js"

const registerUser = async (req, res) => {
  try {
    const user = await createUser(req.body)
    await user.save()
    res.status(201).send(user)
  } catch(e) {
    res.status(422).send('Something went wrong!')
  }
}

export {
  registerUser
}
