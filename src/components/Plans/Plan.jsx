import React from 'react'
import './Plan.css'
import {plansData} from '/src/data/plansData.jsx'
import whiteTick from '/src/assets/whiteTick.png'

const Plan = () => {
  return (
    <div className="plans-container">
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="programs-header">
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now withus</span>
        </div>

        {/* plans card  */}

        <div className="plans">
            {plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>₹ {plan.price}</span>
                    
                    <div className="features">
                         {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                         ))}
                    </div>
                    <div>
                         <span>see more benefits </span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plan
