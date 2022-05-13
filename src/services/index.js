import axios from "axios"

const URL = 'https://ecommerce-exercise-backend.herokuapp.com'

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export const loginUser = async (data) => {
  const request = await axios.post(`${URL}/login/`, data)
  return request.data
}

export const createNewUser = async (data) => {
  const request = await axios.post(`${URL}/users/`, data)
  return request.data
}

export const getProducts = async () => {
  const request = await axios.get(`${URL}/products/`, getConfig())
  return request.data
}

export const getProductsByName = async (data) => {
  const request = await axios.get(`${URL}/products/?name__icontains=${data}`, getConfig())
  return request.data
}

export const getProductById = async (id) => {
  const request = await axios.get(`${URL}/products/${id}/`, getConfig())
  return request.data
}

export const getFilterCategories = async () => {
  const request = await axios.get(`${URL}/categories/`, getConfig())
  return request.data
}

export const getFilterProduct = async (id) => {
  const request = await axios.get(`${URL}/products/?category=${id}`, getConfig())
  return request.data
}

export const addProductToCart = async (data) => {
  const request = await axios.post(`${URL}/products/add_to_cart/`, data, getConfig())
  return request.data
}

export const getProductsFromCart = async () => {
  const request = await axios.get(`${URL}/cart/`, getConfig())
  return request.data
}

export const deleteProductFromCart = async (id) => {
  const request = await axios.delete(`${URL}/cart/${id}/remove_item/`, getConfig())
  return request.data
}

export const postCheckout = async () => {
  const request = await axios.post(`${URL}/cart/buy/`, {}, getConfig())
  return request.data
}