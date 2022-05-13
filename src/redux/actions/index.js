import { deleteProductFromCart, getFilterCategories, getFilterProduct, getProductById, getProducts, getProductsFromCart } from "../../services"

export const actions =  {
  productSetAll: "@product/setAll",
  productInfoSetById: "@productInfo/setById",
  categoriesSetValues: "@categories/setValues",
  cartSetProducts: "@cart/setProducts"
}
// dispatch({type: "@product/setAll", payload: data})

export const productSetAll = (data) => ({
  type : actions.productSetAll,
  payload: data
})

export const setProductInfo = (data) => ({
  type: actions.productInfoSetById,
  payload: data
})

export const setCategories = (data) => ({
  type: actions.categoriesSetValues,
  payload: data
})

export const setProductsToCart = (data) => ({
  type: actions.cartSetProducts,
  payload: data
})

export const setProductThunk = (category) => {
  return dispatch => {
    if (category) {
      getFilterProduct(category)
        .then((response) => {
          dispatch(productSetAll(response))
        })
    } else {
      getProducts()
      .then((response) => {
         dispatch(productSetAll(response))
      })
    }
  }
}

export const setInfoProductThunk = (id) => {
  return (dispatch) => {
    getProductById(id)
      .then((response) => {
         dispatch(setProductInfo(response))
      })
  }
}

// dispatch(productSetAll())
// dispatch(productSetById(data))

export const setCategoriesThunk = () => {
  return (dispatch) => {
    getFilterCategories()
      .then((response) => {
        dispatch(setCategories(response))
      })
  }
}

export const setCartProductsThunk = () => {
  return (dispatch) => {
    getProductsFromCart()
      .then((response) => {
        dispatch(setProductsToCart(response))
      })
  }
}

export const deleteCartProductThunk = (id) => {
  return (dispatch) => {
    deleteProductFromCart(id)
      .then(() => {
        dispatch(setCartProductsThunk())
      })
  }
}