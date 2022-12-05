const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const userModel = require('../models/userModel');
const employeeModel = require('../models/employeeModel');
//const validate = require('../models/userModel');
const jwt = require('jsonwebtoken')


//1-Allow user to create new account
router.post('/user/signup', async(req, res)=>{
    try {
        if(!req.body) {
        return res.status(400).send({
            message: `user content cannot be empty`
        });
        }else{
            const newUser = new userModel(req.body)
            await newUser.save()
            console.log(req.body.username)
            res.status(201).send(newUser)
        }

    } catch (error) {
        res.status(500).send(error)
    }
})

//2-Allow user to access the system
//User can login using username/email and password
router.post('/user/login', async(req, res)=>{
    try {
        
        if(!req.body) {
        return res.status(400).send({
            message: `user content cannot be empty`
        });
        }else{            
            userModel.findOne(
                {$or:[
                {"username":req.body.username},
                {"email": req.body.email}
            ]}, function(err, user1){
                if (err) throw "error1";
                user1.comparePassword(req.body.password, function(err, isMatch){
                    if (err) throw "error2";
                    else {
                        if (isMatch){
                            res.status(200).send({
                            "status": true,
                            "username": user1.username,
                            "message": "User logged in successfully"
                            })
                        }else {
                            res.status(200).send({
                            "status": false,
                            "message": "Invalid Username and password"
                            })
                        }   
                    }})
            })        
        } 

    } catch (error) {
        res.status(500).send(error)
    }
})


//3-User can get all employee list
router.get('/emp/employees',  async(req, res)=>{
    try {
        const employees = await employeeModel.find()
        res.status(200).send(employees)        
    } catch (error) {
        res.status(500).send(error)
    }
})

//4-User can create new employee
router.post('/emp/employees',  async(req, res)=>{
    try {
        if(!req.body) {
        return res.status(400).send({
            message: `employee content cannot be empty`
        });
        }else{
            const newEmployee = new employeeModel(req.body)
            await newEmployee.save()
            res.status(201).send(newEmployee)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

//5-User can get employee details by employee id
router.get('/emp/employees/:eid',  async(req, res)=>{
    try {
        const employee = await employeeModel.findById(req.params.eid)
        res.status(200).send(employee)
    } catch (error) {
        res.status(500).send(error)
    }
})

//6-User can update employee details
router.put('/emp/employees/:eid',  async(req, res)=>{
    try {
        if(!req.body) {
            return res.status(400).send({
                message: `user content cannot be empty`
        });
        }else{
            const employee = await employeeModel.findByIdAndUpdate(req.params.eid, req.body)
            console.log(req.params.eid)
            if (!employee) { 
                res.status(404).send("No item found")
            }
            res.status(200).send(employee)
            console.log("added successfully")
            
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

//7-User can delete employee by employee id
router.delete('/emp/employees/:eid',  async(req, res)=>{
    try {
        employeeId = req.params.eid
        console.log(employeeId)
        const employee = await employeeModel.findByIdAndDelete(employeeId)
        //console.log(employee)
        if (!employee) { 
                res.status(404).send("No item found")
            } 
        console.log(employee)   
        res.status(204).send(employee)
        
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router;