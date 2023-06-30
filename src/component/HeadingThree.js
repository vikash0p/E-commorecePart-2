import React from 'react'
import '../Style.css'

const HeadingThree = ({headingthree}) => {
  return (
    <div>
      <h3 className='headingThreeCss mx-3 mt-2 headingThreeText ps-3 text-dark mt-4 py-1 shadow-sm'>{headingthree} </h3>
    </div>
  )
}

export default HeadingThree
