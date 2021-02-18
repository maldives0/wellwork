const {configureStore, getDefaultMiddleware} = require('@reduxjs/toolkit');
const reducer = require('./reducers');
const loggingMiddleware = () => (next) => (action) => {
  console.log('loggin:', action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: [loggingMiddleware, ...getDefaultMiddleware()],
});
module.exports = store;
