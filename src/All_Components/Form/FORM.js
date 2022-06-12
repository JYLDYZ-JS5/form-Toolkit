import { useDispatch, useSelector } from 'react-redux'
import { sliceActions } from '../../store/reducers'
import Button from '../UI/Button'
import cls from './FORM.module.css'

const Form = () => {
  const state = useSelector((state) => state.validation)
  const className = useSelector(state => state.validation.className)
  const disabled = useSelector(state => state.validation.disabled)

  const dispatch = useDispatch()
  const gmailChangeHandler = (e) => {
    dispatch(sliceActions.gmailChangeHandler(e.target.value))
  }
  const passwordChangeHandler = (e) => {
    dispatch(sliceActions.passwordChangeHandler(e.target.value))
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(sliceActions.showLoading())
    dispatch(sliceActions.submitToLocalStorage())
    setTimeout(() => {
      dispatch(sliceActions.notShowLoading())
    }, 2000);
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={gmailChangeHandler}
        value={state.gmail}
        type="text"
        name="gmail"
        className={`${cls.input} ${className}`}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />
      <input
        onChange={passwordChangeHandler}
        value={state.password}
        type="text"
        name="password"
        className={cls.input}
      />
      <Button button_name="Login" type="submit" />
      {disabled && <p>try again</p>}
    </form>
  )
}
export default Form
