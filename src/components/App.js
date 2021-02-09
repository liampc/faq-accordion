import React from 'react'
import '../scss/_variables.scss'
import '../scss/_App.scss'

import Item from './Item'
import contentData from '../content'

function App(){

    const content = contentData.map(data => {
        return <Item list={data} />
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


export default App