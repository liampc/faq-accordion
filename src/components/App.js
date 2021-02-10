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
        
        this.setState(prevState => {
            const newTodos = prevState.contents.map(data => {
                if (data.id == id){
                    return {
                        ...data,
                        isActive: !data.isActive
                    }
                }
                return data
            })
            return {
                contents: newTodos
            }
        })

    }



    render(){

        const content = this.state.contents.map(data => {
            return <Item list={data} 
                    key={data.question} 
                    onClick={this.handleClick}
                    isActive={data.isActive}
                    />
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