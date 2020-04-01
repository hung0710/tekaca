import React, { Component, useEffect } from "react"

import Books from '@components/home/books/Books.js'

function Home(props){
    return (
        <div className="content">
           <Books/>
        </div>
    )

}

export default Home