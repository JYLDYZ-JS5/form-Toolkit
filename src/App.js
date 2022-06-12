import { useSelector } from 'react-redux'
import Form from './All_Components/Form/FORM.js'
import Loading from './All_Components/UI/loading.js'
import Cart from './All_Components/UI/Cart'
import Logged from './All_Components/Registraited/registraited.js'

function App() {
  const loading = useSelector((state) => state.validation.loading)
  const isShow = useSelector((state) => state.validation.showForm)
  const showLogged = useSelector(state => state.validation.showLogged)

  return (
    <>
      <Cart>
        {loading && <Loading />}
        {isShow && <Form />}
        {/* <Form /> */}
      </Cart>
      {showLogged && <Logged />}
    </>
  )
}

export default App
