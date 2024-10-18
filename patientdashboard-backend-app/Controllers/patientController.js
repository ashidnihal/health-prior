const Patient = require('../Models/patientSchema');


exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAPatient = async (req, res) => {
    const patientId = req.params.id;
    try {
        const aPatient = await Patient.findById(patientId); 
        if (aPatient) {
            res.status(200).json(aPatient);
        } else {
            res.status(404).json({ message: "Can't find the patient" }); 
        }
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};