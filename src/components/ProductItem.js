import { Link } from "react-router-dom"

const ProductItem = ({productObj}) => {
  return (
    <Link to={`/shop/${productObj.id}`}>
      <div style={{margin: '20px'}}>
        {productObj.name}
      </div>
    </Link>
  )
}

export default ProductItem