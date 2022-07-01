import React from 'react'
import { TextField } from '@mui/material';
import {inputs} from '.'

const DynamicField = ({register}) => {
  return (
    <>
      {inputs.map((input) =>  
          <TextField key={input.name} {...register(input.name)} type={input.type} label={input. name}/>
        )
      }
    </>
  )
}

export default DynamicField