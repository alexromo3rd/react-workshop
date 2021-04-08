import * as React from 'react'
// import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
// import Heading from 'YesterTech/Heading'
import StarRatings from './StarRatings'

const products = [
  {
    id: 1,
    name: 'Mario Kart',
    rating: 5,
    brand: 'Nintendo',
    condition: 'new',
  },
  {
    id: 2,
    name: 'Donkey Kong',
    rating: 3.5,
    brand: 'Nintendo',
    condition: 'good',
  },
  {
    id: 3,
    name: 'Nintendo NES',
    rating: 4,
    brand: 'Nintendo',
    condition: 'fair',
  },
]

function productsMapCallback(product, i, list) {
  return <p key={product.id}>{product.name}</p>
}

export default function BrowseProducts() {
  return products.map(({ name: productName, brand, rating, id }) => (
    <React.Fragment key={id}>
      <h2>{productName}</h2>
      <p>{brand}</p>
      <StarRatings rating={rating} />
    </React.Fragment>
  ))
}
