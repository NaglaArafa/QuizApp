import {applyMiddleware, compose, createStore} from "redux"; 
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk"; 

import reducers from "./reducers/index";

function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
    // add support for Redux dev tools

    // just return the createStore function with two args > combinedReducers & initialState
    return createStore(
        reducers,
        initialState,

        // just add some middlewares to our app
        composeEnhancers(
            applyMiddleware( 
                thunk,
                reduxImmutableStateInvariant()
            )
        )
    );
}

export default configureStore;