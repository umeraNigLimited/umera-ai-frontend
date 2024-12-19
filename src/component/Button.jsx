import React from 'react'
import '../style/Button.css'

function Button({
    label = "", 
    onClick,          
    type = "button",    
    style = {},        
    className = "",     
    disabled = false,   
    icon = null,
}
) {

    const baseStyle = 'button'
    const styles = {
        default: ''
    }

  return (
    <button
    type={type}
    onClick={onClick}
    style={style}
    className={`btn ${className}`}
    disabled={disabled}
    >
    {icon && <span className="btn-icon">{icon}</span>}
    {label && <span className="btn-label">{label}</span> }   
    </button>
  )
}

export default Button