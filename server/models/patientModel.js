import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';


//creating a user
const userSchema = new Schema({
    email: String,
    password: String,
});

userSchema.pre('save', async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, 12);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});
const User = mongoose.model('User', userSchema);

//creating a patient
const patientSchema = new Schema({
    serial: Number,
    name: String,
    age: Number,
    gender: String,
    address: String,
    contact: String,
    date: Date,
    time: String,
    refBy: String,
    tests: [{
        testType: String,
        testData: Schema.Types.Mixed
    }]
});

const Patient = mongoose.model('Patient', patientSchema);

  


//creating a tests




//creating a doctor's List
const doctorSchema = new Schema({
    name: String,

})
const Doctor = mongoose.model('Doctor', doctorSchema)

export { User, Patient,  Doctor }; 
