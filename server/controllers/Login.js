import { User } from "../models/patientModel.js";

const Login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({username});

        if(!user) {
          return res.json({ message : 'Incorrect Credentials'})
        } 
        if( user.password === password){
            return res.json({ message: 'Login Successfull', user})
        } else {
            return res.json({ message: 'Incorrect Credentials'})
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error'})
        
    }

}

export default Login;