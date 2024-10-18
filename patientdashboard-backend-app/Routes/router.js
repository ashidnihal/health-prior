//  import express
const express =require('express')
const jwtMiddleware =require('../Middleware/jwtMiddleware')

const userController = require('../Controllers/userController')
const patientController = require('../Controllers/patientController')
const authorizationController = require('../Controllers/authorizationController')

const router = express.Router()
// register
router.post('/register',userController.register)
// login api call
router.post('/login',userController.login)
// get patient
router.get('/patientslist',jwtMiddleware,patientController.getPatients)
// apatient
router.get('/patients/:id', jwtMiddleware,patientController.getAPatient);
// request authorization
router.post('/patients/:patientId/authorization',jwtMiddleware, authorizationController.createAuthorizationRequest);

// Route to fetch all authorization requests
router.get('/patients/prior/requests-list', jwtMiddleware, authorizationController.getAllAuthorizationRequests);





module.exports=router
