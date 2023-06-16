import React from 'react'
import "../CSS/Button.scss"
import {CgSpinner, CgClose} from "react-icons/cg"
import {BsCheckLg} from "react-icons/bs"

const Button = ({success, error, showLoader }) => {
  return (
    
    <div success={success}  showLoader={showLoader} error={error}>
        {
        showLoader ? <button className='btn loading'><div><CgSpinner /></div></button>:
        success ? <button className='btn success'><BsCheckLg/></button>: 
        error ? <button className='btn fail'><CgClose/></button> : 
        <button className='btn submit'>Submit</button>
        }
    
    </div>
    
  )
}

export default Button