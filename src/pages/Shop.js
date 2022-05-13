import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import { setCategoriesThunk, setProductThunk } from "../redux/actions"


const Shop = () => {

  const dispatch = useDispatch()
  const productArr = useSelector(state => state.products)
  const categoriesArr = useSelector(state => state.categories)

  const [currentCategoty, setCurrentCategory] = useState('')

  useEffect(() => {
    dispatch(setProductThunk(currentCategoty))
    dispatch(setCategoriesThunk())
  }, [dispatch, currentCategoty])

  

  const list = productArr.map((item) => <ProductItem key={item.id} productObj={item} />)
  const categoriesList = categoriesArr.map((item) => <button key={item.id} onClick={() => setCurrentCategory(item.id)} >{item.name}</button>)

  return (
    <div>
      <h1>Esta es mi tienda</h1>
      <input type="checkbox" name="" id="" />
      <input type="text" />
      <button>Search</button>
      <hr />
      <button onClick={() => setCurrentCategory('')}>
        All Products
      </button>
      {categoriesList}
      {list}
    </div>
  )
}

export default Shop