// Redux store is a container for our app states. THe recommended pattern is to use only one store.

import {configureStore} from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})