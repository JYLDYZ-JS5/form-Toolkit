import { configureStore } from '@reduxjs/toolkit'
import sliceFunc from './reducers'

const store = configureStore({
  reducer: {
    validation: sliceFunc.reducer,
  },
})

export default store
