
import { logger } from './middleware';
import { rootReducer } from './reducers'
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
const Store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger]
})

export default Store