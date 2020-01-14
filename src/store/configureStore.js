import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import modules from '../modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function() {
    const store = createStore(
        modules,
        composeEnhancers(applyMiddleware(ReduxThunk))
    )

    return store;
}