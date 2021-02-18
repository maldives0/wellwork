const twilio = require("twilio");
const dotenv = require("dotenv");
dotenv.config();

const accoutSid = process.env.TWILIO_ACCOUNTSID;
const authToken =process.env.TWILIO_AUTHTOKEN;

module.exports = new twilio.Twilio(accoutSid, authToken);