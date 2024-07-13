import React from 'react'

const Button = ({name}) => {
  return (
    <div>
    <button className='mx-1 my-4 px-5 py-1 bg-gray-200 rounded-full border border-black hover:bg-gray-400'>{name}</button>
    </div>
  )
}

export default Button
