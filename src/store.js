import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Redux/reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";


const rootrudcers =  combineReducers({reducers});
const middleware = [thunk];

const store = createStore(rootrudcers,composeWithDevTools(applyMiddleware(...middleware)))

export default store;