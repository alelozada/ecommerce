import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteCartProductThunk } from "../redux/actions"

const CartProduct = ({productObj}) => {

  const dispatch = useDispatch()
  const [deleteId, setDeleteId] = useState(null)

  useEffect(() =>  {
    if (deleteId) {
      dispatch(deleteCartProductThunk(deleteId))
    }
  }, [deleteId, dispatch])

  return (
    <div>
      <h1>{productObj.product.name}</h1>
      <h3>Cantidad: {productObj.quantity}</h3>
      <h3>Total: ${productObj.product.price * productObj.quantity}</h3>
      <button onClick={() => setDeleteId(productObj.id)} >X</button>
    </div>
  )
}

export default CartProduct