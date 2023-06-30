import React, { useState } from 'react'

const MyImages = ({ images }) => {
    const [mainImages, setMainImages] = useState(images[0])
    return (
        <>
            <img src={mainImages} alt='images'  height='400px' className='myImagesOne' style={{  maxWidth:'450px'}} />
            <div className='d-flex '>
                {
                    images && images.map((img, idx) => {
                        return (
                            <img src={(img ? img : 'null')} key={idx} alt={img?.title} width='80px' height='70px' className='img-fluid' onClick={()=>setMainImages(img)} />

                        )
                    })
                }



            </div>
        </>
    )
}

export default MyImages
