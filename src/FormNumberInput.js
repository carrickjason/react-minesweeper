import React, { forwardRef } from 'react'
import { FormInput } from './FormInput'

export const FormNumberInput = forwardRef((props, ref) => (
  <FormInput {...props} type="number" ref={ref} />
))
