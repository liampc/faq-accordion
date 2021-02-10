import React, {Component} from 'react'
import '../scss/_variables.scss'
import '../scss/_App.scss'

import Item from './Item'
import contentData from '../content'

class App extends Component {

    constructor(){
        super()
            this.state = {
                contents: contentData
            }
            this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(id){
        console.log(id)
    }



    render(){

        const content = this.state.contents.map(data => {
            return <Item list={data} key={data.question} onClick={this.handleClick}/>
        })

        return (
            <main>
                <div className="card">
                     <div className="card__hero"></div>
                     <div className="card__faq">
                         <h1>FAQ</h1>
                         {content}
                     </div>
                </div>
            </main>
         )
    }
}


export default App