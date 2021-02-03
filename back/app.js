const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');

const morgan = require('morgan');

const cors = require('cors');

const app = express();
dotenv.config();
const prod = process.env.NODE_ENV === 'production';
const port = prod ? 443 : 8080;
// const frontUrl = prod
//   ? 'https://portpolio-five.vercel.app'
//   : 'http://localhost:3030';

// app.use(
//   cors({
//     origin: frontUrl,
//     credentials: true,
//   }),
// );
app.use(morgan('dev'));
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log('db연결 성공');
  })
  .catch(console.error);
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('hello express');
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port, () => {
  console.log(`${port}에서 대기 중`);
});
