import {combineReducers} from 'redux';
import userSlice = require('./userSlice');
import workSlice = require('./workSlice');

export default combineReducers({
user: userSlice.reducer,
work: workSlice.reducer,
})