const { combineReducers } = require("redux");
const userSlice = require("./userSlice");
const workSlice = require("./workSlice");

module.exports = combineReducers({
  user: userSlice.reducer,
  work: workSlice.reducer,
});
