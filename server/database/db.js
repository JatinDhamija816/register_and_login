import mongoose from "mongoose";

const Connection = async (password) => {
    const URL = `mongodb+srv://RL:${password}@rl.o98xrgl.mongodb.net/?retryWrites=true&w=majority&appName=RL`

    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log("DB Connected")

    } catch (error) {
        console.log("DB Disconnected")
        console.log(error)
    }
}

export default Connection