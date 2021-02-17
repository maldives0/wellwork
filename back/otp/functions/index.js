const admin = require("firebase-admin");
const serviceAccount = require("./service_account.json")
const functions = require("firebase-functions");
const createUser = require("./create_user");
const requestOneTimePassword = require("./request_one_time_password");
const verifyOneTimePassword = require("./verify_one_time_password");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
exports.createUser = functions.https.onRequest(createUser);
exports.createUser = functions.https.onRequest(requestOneTimePassword);
exports.createUser = functions.https.onRequest(verifyOneTimePassword);