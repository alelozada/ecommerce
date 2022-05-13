import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import Search from "../components/Search"
import { setCategoriesThunk, setProductThunk } from "../redux/actions"
import { getProductsByName } from "../services"


const Shop = () => {

  const dispatch = useDispatch()
  const productArr = useSelector(state => state.products)
  const categoriesArr = useSelector(state => state.categories)

  const [searchValue, setSearchValue] = useState('')
  const [productsByName, setProductsByName] = useState([])
  const [currentCategoty, setCurrentCategory] = useState('')
  const [isSearched, setIsSearched] = useState(false)

  useEffect(() => {
    dispatch(setProductThunk(currentCategoty))
    dispatch(setCategoriesThunk())
  }, [dispatch, currentCategoty])

  useEffect(() => {
    if (searchValue) {
      getProductsByName(searchValue)
      .then((response) => {
        console.log(response)
        setProductsByName(response)
        setIsSearched(true)
        setSearchValue('')
      })
    }
  }, [searchValue, setIsSearched, setSearchValue])

  const list = productArr.map((item) => <ProductItem key={item.id} productObj={item} />)
  
  const categoriesList = categoriesArr.map((item) => <button key={item.id} onClick={() => setCurrentCategory(item.id)} >{item.name}</button>)

  const productByNameList = productsByName.map((item) => <ProductItem key={item.id} productObj={item} />)

  return (
    <div>
      <h1>Esta es mi tienda</h1>
      <Search handlerSearch={setSearchValue} />
      <hr />
      <button onClick={() => setCurrentCategory('')}>
        All Products
      </button>
      {categoriesList}
      {list}
      {isSearched ? (
        <div>
          <hr />
          <h4>Your items!</h4>
          {productByNameList}
        </div>
        
      ): null}
      
      
    </div>
  )
}

export default Shop