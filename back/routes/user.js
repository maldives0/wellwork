const { Message } = require('./models');
app.get('/api/messages', async (req, res, next) => {
  //GET/messages
  try {
    const messages = await Message.findAll();

    res.status(200).json(messages);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
app.post('/api/admin/:password', async (req, res, next) => {
  //GET/messages
  try {
    if (req.params.password === process.env.ADMIN_PASSWORD) {
      res.status(200).json(process.env.ADMIN_PASSWORD);
    } else {
      res.status(200).json(null);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});
app.delete('/api/messages/:id', async (req, res, next) => {
  //DELETE/messages
  try {
    const message = await Message.findOne({
      where: { id: req.params.id },
    });
    if (!message) {
      res.status(403).send('존재하지 않는 메세지입니다.');
    }
    const messageUpdate = await Message.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(messageUpdate);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
app.post('/api/messages', async (req, res, next) => {
  //POST/messages
  try {
    await Message.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'maliethy@gmail.com',
        pass: process.env.GMAIL_PASSWORD,
      },
    });
    await transporter.verify();
    await transporter.sendMail({
      from: '"portpolio 메세지 내역" <report@portpolio.com>',
      to: '"portpolio 관리자" <maliethy@gmail.com>',
      subject: 'portpolio - 메세지 도착',
      html: `
        <div>
          <a href="${frontUrl}"> 메세지가 접수되었습니다.</a>
          <p> 이름: ${req.body.name}</p>
          <p> 이메일: ${req.body.email}</p>
          <p> 메세지: ${req.body.message}</p>
        </div>
      `,
    });
    console.log('mail sent');
    res.status(201).send('ok');
  } catch (err) {
    console.error(err);
    next(err);
  }
});
