import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  gmail: '',
  password: '',
  loading: false,
  showForm: true,
  showLogged: false,
  // disabled: true
}
const sliceFunc = createSlice({
  name: 'validation',
  initialState: initialState,
  reducers: {
    gmailChangeHandler(state, value) { state.gmail = value.payload },
    passwordChangeHandler(state, value) { state.password = value.payload },
    submitToLocalStorage(state) {
      localStorage.setItem('Gmail', state.gmail !== '' ? state.gmail : 'not Valid')
      localStorage.setItem('password', state.password !== '' ? state.password : 'not Valid')
    },
    showLoading(state) {
      state.loading = true
      state.showForm = false
      state.showLogged = false
    },
    notShowLoading(state,) {
      state.loading = false
      state.showLogged = true
    },

    notShowLoadingAfter(state) {
      state.loading = false
      state.showForm = true
      state.showLogged = false
    },

  },
})
export const sliceActions = sliceFunc.actions
export default sliceFunc
