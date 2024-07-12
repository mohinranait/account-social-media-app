'use client'
import React from 'react'

const PrimaryButton = ({ children, type = 'button', disable = false, onClick, bg, color = 'text-white', className }) => {
  return (
    <button
      type={type}
      disable={disable}
      onClick={() => type == 'button' && onClick()}
      className={`px-3 py-2 rounded text-[12px] font-medium text-center ${bg ? bg : 'bg-primary'} ${color} ${className} `}
    >
      {children}
    </button>
  )
}

export default PrimaryButton