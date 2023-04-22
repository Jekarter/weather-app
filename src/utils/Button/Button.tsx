import React from 'react'

interface ButtonProps {
  children: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Button