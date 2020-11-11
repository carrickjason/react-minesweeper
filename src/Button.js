import React from 'react'

export function Button({ children, ...rest }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-default"
      {...rest}
    >
      {children}
    </button>
  )
}
