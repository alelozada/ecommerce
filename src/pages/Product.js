import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInfoProductThunk, setProductThunk } from "../redux/actions";
import { addProductToCart } from "../services";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productInfo)
  const filterProducts = useSelector((state) => state.products)

  const [quantity, setQuantity] = useState(0)
  const [confirm, setConfirm] = useState(false)
  // const [filterProduct, setFilterProduct] = useState([])

  useEffect(() => {
    dispatch(setInfoProductThunk(id))
  }, [dispatch, id])

  useEffect(() => {
    if (quantity && confirm) {
      addProductToCart(
        {
          product: id,
          quantity: quantity
        }
      )
      .then((response) => {
        console.log(response)
        setConfirm(false)
      })
    }
  }, [quantity, confirm, id])

  useEffect(() => {
    if (product.category) {
      dispatch(setProductThunk(product.category.id))
    }

    console.log(product)
  }, [dispatch, product])

 const decrement = () => {
   setConfirm(false)
   if (quantity > 0) {
    setQuantity(quantity - 1)
   }
 }

 const increment = () => {
  setConfirm(false)
  setQuantity(quantity + 1)
 }

 

  return (
    <div>
        <h1>{product.name}</h1>
        <div>
          <button onClick={decrement} >-</button>
          {quantity}
          <button onClick={increment}>+</button>
          <br />
          <button onClick={() => setConfirm(true)} >Add to Cart</button>
        </div>
        <p>{product.description}</p>
        {product.images?.map((item) => <img style={{width: '200px', height: 'auto'}} src={item.url} alt='' key={item.id} />)}

        <h2>Productos Relacionados</h2>
        { filterProducts.map((product) => (
          <div key={product.name}>
            <h3>{product.name}</h3>
            <img style={{width: '200px', height: 'auto'}} src={product.images[0].url} alt="" />
          </div>
        ))}

    </div>
  )
}

export default Product