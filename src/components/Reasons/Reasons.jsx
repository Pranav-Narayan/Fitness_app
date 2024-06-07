import React from 'react'
import './Reasons.css'

// images 

import image1 from '/src/assets/image1.png'
import image2 from '/src/assets/image2.png'
import image3 from '/src/assets/image3.png'
import image4 from '/src/assets/image4.png'
import nb from '/src/assets/nb.png'
import adidas from '/src/assets/adidas.png'
import nike from '/src/assets/nike.png'
import tick from '/src/assets/tick.png'

const Reasons = () => {
  return (
    <div className="Reasons" id='Reasons'>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Some Reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span>choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>over 140+ expert coaches</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>train smarter and faster than before</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 free program for new member</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>reliable partners</span>
                </div>
            </div>
            <span>our partners</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons
