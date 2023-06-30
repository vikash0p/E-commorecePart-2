import React from 'react'

import AllCategoryOne from './AllCategoryOne'
import CustomerReview from './CustomerReview'
import Delivery from './Delivery'
import Price from './Price'

const AllCategory = ({setFilter,product,filterProduct,filterCategory}) => {

  return (
    <>
      <Delivery />
        <CustomerReview filterCategory={filterCategory} />
      <AllCategoryOne setFilter={setFilter} product={product}  />
      <Price filterProduct={filterProduct} />
    </>
  )
}

export default AllCategory
