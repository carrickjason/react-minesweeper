import React from 'react'

export const FormInput = ({
  label,
  id,
  value,
  onChange,
  additionalContainerClasses,
  ...rest
}) => (
  <div className={`text-center flex-grow m-2 ${additionalContainerClasses}`}>
    <div className="">
      <label
        className="block mb-2 text-lg text-lightBlue tracking-widest"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
    <div className="">
      <input
        id={id}
        value={value}
        onChange={onChange}
        className="text-center text-lightBlue bg-darkBlue text-2xl appearance-none border-2 border-transparent rounded-full w-full py-3 px-4 leading-tight focus:outline-none focus:border-lightBlue"
        {...rest}
      />
    </div>
  </div>
)
