import React from 'react'

const primaryClasses =
  'bg-yellow text-darkBlue rounded border-b-4 border-magenta px-8 py-4 text-2xl focus:outline-none focus:border-b-12 focus:pb-2 hover:border-b-12 hover:pb-2'
const secondaryClasses =
  'text-yellow text-lg pb-1 border-b-4 border-transparent focus:border-yellow hover:border-yellow focus:outline-none'

export function Button({
  buttonStyle = 'primary',
  children,
  additionalClasses,
  ...rest
}) {
  return (
    <button
      className={`${
        buttonStyle === 'primary' ? primaryClasses : secondaryClasses
      } transition-all outline-none duration-100 uppercase font-black tracking-widest ${additionalClasses}`}
      {...rest}
    >
      {children}
    </button>
  )
}
