import React, {Component} from 'react'

import '../scss/_variables.scss'
import '../scss/_Item.scss'

import arrow from '../assets/images/icon-arrow-down.svg'



class Item extends Component {

    render (){
        return (
            <div className="item">
                <p className="item__question"> 
                    {this.props.list.question}
                    <img src={arrow} alt="icon-arrow"/>
                </p>
                <p className="item__answer">{this.props.list.answer}</p>
            </div>
        )
    }
    
}


export default Item