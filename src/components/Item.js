import React from 'react'

import '../scss/_variables.scss'
import '../scss/_Item.scss'

import arrow from '../assets/images/icon-arrow-down.svg'

function Item(props){
    return (
        <div className="item">
            <p className="item__question"> 
                {props.list.question}
                <img src={arrow} alt="icon-arrow"/>
            </p>
            <p className="item__answer">{props.list.answer}</p>
        </div>
    )
}


export default Item