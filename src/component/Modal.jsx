import React from 'react'
import '../style/Modal.css'

function Modal({children}) {
  return (
    <div className='modal'>
        {children}
    </div>
  )
}

export default Modal