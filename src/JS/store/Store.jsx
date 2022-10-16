//import createStore
import { createStore } from 'redux';
//import rootReducer
import rootReducer from '../reducers'
// create Store
const Store = createStore (rootReducer, window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION())

export default Store
