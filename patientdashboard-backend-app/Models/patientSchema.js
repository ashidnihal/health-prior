// const mongoose = require('mongoose');

// const patientSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     condition: { type: String, required: true },
//     treatments: [String],  // Array to store treatments
//     medicationHistory: [String],  // Array to store medication history
//     labResults: [{
//         testName: String,
//         result: String
//     }],
// }, { timestamps: true });

// module.exports = mongoose.model('Patient', patientSchema);
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    condition: { type: String, required: true },
    treatments: { type: [String], required: true },
    medicationHistory: { type: [String], required: true },
    labResults: [{
        testName: { type: String, required: true },
        result: { type: String, required: true }
    }],
    phone: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    city: { type: String, required: true },
    registerDate: { type: Date, default: Date.now }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
