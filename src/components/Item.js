import React, {Component} from 'react'

import '../scss/_variables.scss'
import '../scss/_Item.scss'

import arrow from '../assets/images/icon-arrow-down.svg'



class Item extends Component {

    render (){

        if (this.props.isActive){
            return (
                <div className="item">
                    <p className="item__question  item__question--active" onClick={() => this.props.onClick(this.props.list.id)}> 
                        {this.props.list.question}
                        <img src={arrow} alt="icon-arrow" className="item__arrow item__arrow--active"/>
                    </p>
                    <p className="item__answer">{this.props.list.answer}</p>
                </div>
            )
        }
        else {
            return (
                <div className="item">
                    <p className="item__question" onClick={() => this.props.onClick(this.props.list.id)}> 
                        {this.props.list.question}
                        <img src={arrow} alt="icon-arrow"/>
                    </p>
                </div>
            )
        }
    }
    
}


export default Item