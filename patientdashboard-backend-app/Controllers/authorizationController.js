const AuthorizationRequest = require('../Models/authorizationRequestSchema ');

// Create a new authorization request
exports.createAuthorizationRequest = async (req, res) => {
    try {
        const { treatmentType, insurancePlan, dateOfService, diagnosisCode } = req.body;
        const { patientId } = req.params;
       
        const newRequest = new AuthorizationRequest({
            patientId,
            treatmentType,
            insurancePlan,
            dateOfService,
            diagnosisCode,
            status: 'pending',
        });

        
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Fetch all prior authorization requests
exports.getAllAuthorizationRequests = async (req, res) => {
    try {
        
        const requests = await AuthorizationRequest.find().populate('patientId', 'name');
        res.status(200).json(requests);  
    } catch (error) {
        res.status(500).json({ message: error.message });  
    }
    
};
