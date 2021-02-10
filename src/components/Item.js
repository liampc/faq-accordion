import React, {Component} from 'react'

import '../scss/_variables.scss'
import '../scss/_Item.scss'

import arrow from '../assets/images/icon-arrow-down.svg'



class Item extends Component {

    render (){

        let questionClass = "item__question"
        let arrowClass = "item__arrow"
        let answerClass = "item__answer"

        if (this.props.isActive){
            questionClass += "--active"
            arrowClass += "--active"
            answerClass += "--active"
        }

        return (
            <div className="item">
                <p className={questionClass} onClick={() => this.props.onClick(this.props.list.id)}> 
                    {this.props.list.question}
                    <img src={arrow} alt="icon-arrow" className={arrowClass}/>
                </p>
                <p className={answerClass}>{this.props.list.answer}</p>
            </div>
        )
        
    }
    
}


export default Item