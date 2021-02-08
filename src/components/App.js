import React from 'react'
import '../scss/_variables.scss'
import '../scss/_App.scss'

import Item from './Item'

function App(){
    return (
       <main>
           <div className="card">
                <div className="card__hero"></div>
                <div className="card__faq">
                    <h1>FAQ</h1>
                    <Item />
                </div>
           </div>
       </main>
    )
}


export default App