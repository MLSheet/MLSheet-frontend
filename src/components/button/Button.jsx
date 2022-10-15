import React from 'react';
import './button.scss'

function Button({ onClick, children, className }){
    return (
      <button type="button" onClick={onClick} className={`button ${className}`} >
        {children}
      </button>
    );
  }

export default Button;