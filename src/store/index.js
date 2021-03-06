import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import reducers from './reducers'
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const rootReducer=combineReducers(reducers)

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))