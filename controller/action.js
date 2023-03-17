const { query } = require("express");

//signup
function signup(req,res){
    try{

        let userName = req.body.userName;
        let userEmail = req.body.userEmail;
        let password = req.body.password;
        let address = req.body.address;
        console.log(userName, userEmail)
        res.status(200).send({message:"user has created successfully", name: userName, email: userEmail})
    }
    catch(error){


        res.status(500).send({message: "error occured" + error.message})
    }
}

//login
function login(req, res) {
    try {
    
        let userEmail = req.params.userEmail;
        //let password = req.params.password
        res.status(200).send({ Message: "login succesfully" })
    }
    catch (err) {
        res.status(500).send({ Message: "error occured" + err.Message })

    }
}
//greet
function greet(req,res){
    try{
        //let name = req.query.name;
        //let contactno = req.query.contactno;
        res.status(200).send({message:`good morning : ${req.query.name} hiii ${req.query.contactno}`});
    }
    catch(err){
        res.status(500).send({message: "error occured" + err.message})

    }
}
//logout
function logout(req, res) {
    try {
        res.status(200).send({ Message: "log out succesfully" })
    }
    catch (err) {

        res.status(500).send({ Message: "error occured" + err.Message })
    }
}

//services
function service(req, res) {
    res.status(200).send("applied services")
}

//export all funnction
module.exports = {
    signup,
    login,
    logout,
    service,
    greet
}
