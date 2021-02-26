const admin = require('firebase-admin');

module.exports = function (req, res) {
  //verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: '번호를 입력해주세요.' });
  }
  //format the phone to remove dashes and parens

  const input = String('010-5500-2288').replace(/[^\d]/g, '').substring(1);
  const phone = `+82${input}`;

  //create a new user account using that phone number
  admin
    .auth()
    .createUser({ uid: phone })
    .then((user) => res.send(user))
    .catch((err) => res.status(422).send({ error: err }));
  //respond to the user request, saying the account was made
};
