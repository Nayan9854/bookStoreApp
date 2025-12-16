import User from '../model/user.model.js' ;
import bcrypt from 'bcryptjs' ;
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body ;
    const user = await User.findOne({ email }) 
    if (user) {
      return res.status(400).json({ message: "User already exists" }) 
    }
    const hashPassword = await bcrypt.hash(password, 10) ;
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    }) ;
    await createdUser.save() ;
    res.status(201).json({ message: "User created successfully", user: {
      fullname: createdUser.fullname,
      email: createdUser.email,
      id: createdUser._id
    }
    })
   } catch (error) {
     console.log("Error during signup", error) ;
     res.status(500).json({ message: "Internal server error" }) ;
  }
} ;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body ;
    const user = await User.findOne({ email }) ;
    const isMatched = await bcrypt.compare(password, user.password) 
    if(!user || !isMatched) {
      return res.status(400).json({ message: "Invalid user name or password" }) ;
    } else {
      res.status(200).json({ message: "Login successful" , user:{
        fullname: user.fullname,
        email: user.email,
        id: user._id
      } }) ;
    }
  } catch (error) {
    console.log("Error during login" + error.message) ;
    res.status(500).json({ message: "Internal server error" }) ;
  }
} ; 