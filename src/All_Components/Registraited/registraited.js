import { sliceActions } from '../../store/reducers'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import Cart from '../UI/Cart'
import cls from './registraited.module.css'

function Logged() {
    const dispatch = useDispatch()
    const values = useSelector(state => state.validation)
    const showFormHandler = () => {
        dispatch(sliceActions.showLoading())
        setTimeout(() => {
            dispatch(sliceActions.notShowLoadingAfter())
        }, 2000);

    }
    return (
        <Cart>
            <div className={cls.logged}>
                <h1>Вы зарегистрированы!</h1>
                <div>
                    <p>Gmail: {values.gmail}</p>
                    <p>Password: {values.password}</p>
                </div>
                <Button button_name='Выйти' onClick={showFormHandler} />
            </div>

        </Cart>
    )
}
export default Logged