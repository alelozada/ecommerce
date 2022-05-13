import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Este es el home</h1>
      <Link to="/shop" >
        <button>Shop</button>
      </Link>
      <Link to="/cart" >
        <button>Cart</button>
      </Link>
    </div>
  )
}

export default Home