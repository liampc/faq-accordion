import React from 'react'

import '../scss/_variables.scss'
import '../scss/_Item.scss'

import arrow from '../assets/images/icon-arrow-down.svg'

function Item(){
    return (
        <div className="item">
            <p className="item__question">How many team members 
                <img src={arrow} alt="icon-arrow"/>
            </p>
            <p className="item__answer">No more than</p>
        </div>
    )
}


export default Item