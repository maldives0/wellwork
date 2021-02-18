const { createAsyncThunk } = require("@reduxjs/toolkit");
const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

exports.logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  return await delay(500, {});
});
