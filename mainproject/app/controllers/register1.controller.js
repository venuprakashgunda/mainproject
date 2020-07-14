const Register1 = require("../models/register1.model.js");
const Login1 = require("../models/register1.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const register1 = new Register1({
    Name: req.body.Name,
    mobile: req.body.mobile,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    address : req.body.address
  });
  

  // Save Customer in the database
  Register1.create(register1, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  }); 
};





  exports.login = (req, res) => {
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  //console.log(req.body);
Register1.loginbyId(
  req.params.register1Id,
  new Register1(req.body),

  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.register1Id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Customer with id " + req.params.register1Id
        });
      }
    } else res.send(data);
  }
);
};




