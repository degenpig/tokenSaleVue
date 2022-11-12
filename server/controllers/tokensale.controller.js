const Tokensale = require("../models/tokensale.model.js");

// Create and Save a new Customer
exports.socialShare = (req, res) => {
  console.log("OOOKKK");
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Tokensale.socialShare((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

exports.checkMetamaskAddr = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  let metamaskaddr = req.body.metamask;
  Tokensale.checkMetamaskAddr(metamaskaddr, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
}

exports.addReferralCode = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  let metamaskaddr = req.body.metamask;
  Tokensale.addReferralCode(metamaskaddr, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
}
