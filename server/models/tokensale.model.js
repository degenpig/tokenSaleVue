const sql = require("./db.js");
var shortid = require('shortid');

module.exports.socialShare = (callback) => {
  sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

  });
}

module.exports.checkMetamaskAddr = (metamaskaddr,callback) => {
  sql.query("Select * from tokensale where metamask = ?", metamaskaddr, (err, res) => {
    if (err) {
      console.log("error: ", err);
      callback(err, null);
      return;
    }
    callback(null, res);
  });
}

module.exports.addReferralCode = (metamaskaddr,callback) => {  
  let referral_code = shortid.generate();
  sql.query("INSERT INTO tokensale (metamask, referral_code, share_count) VALUES (?, ?, 0)",[metamaskaddr, referral_code], (err, res)=>{
    if (err) {
      console.log("error: ", err);
      callback(err, null);
      return;
    }
    callback(null, referral_code);
  });
}
