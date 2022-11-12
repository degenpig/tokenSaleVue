module.exports = app => {
  const tokensale = require("../controllers/tokensale.controller.js");

  app.get("/api/socialShare", tokensale.socialShare);
  app.post("/api/checkMetamaskAddr", tokensale.checkMetamaskAddr);
  app.post("/api/addReferralCode", tokensale.addReferralCode);
};
