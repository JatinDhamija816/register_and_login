import user from "../model/user.js";
import bcrypt from 'bcrypt'

export const RegisterUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(401).json({
                error: "Please Fill all the Details"
            })
        }
        const existUser = await user.findOne({ email })
        if (existUser) {
            return res.status(422).json({
                error: 'Email already Exists'
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new user({ username, email, password: hashPassword })
        await newUser.save()
        return res.status(201).json({
            msg: 'User Register Successfully'
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Error While Register",
            error
        })
    }
}
export const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).json({
                error: "Please Fill all the Details"
            })
        }
        const existUser = await user.findOne({ email })
        if (existUser) {
            console.log(password + ' ' + existUser.password)
            bcrypt.compare(password, existUser.password, function (err, result) {
                if (result) {
                    return res.status(201).json({
                        msg: "Login Successfuly"
                    })
                } else {
                    return res.status(422).json({
                        error: 'Invalid Details'
                    })
                }
            });
        } else {
            return res.status(422).json({
                error: 'Invalid Details'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: "Error While Login",
            error
        })
    }
}