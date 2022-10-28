import React from 'react'
import ReactDom from 'react-dom'
import Main from './Main/Main'
import {BrowserRouter } from 'react-router-dom'

function Index(){
  return(
    <>
      <BrowserRouter>
          <Main/>
      </BrowserRouter>
    </>
  )
}
 
ReactDom.render(<Index/>,document.querySelector('#root'))