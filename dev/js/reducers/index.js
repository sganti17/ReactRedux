import {combineReducers} from 'redux';
import UserReducer from "./reducerUsers";
import AcitveUserReducer from "./reducerActiveUser";

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: AcitveUserReducer
});

export default allReducers;
    