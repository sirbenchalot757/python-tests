import React, {useEffect, useState} from 'react';
import styles from '../../styles/Home.module.css'
import { TextField, Stack, Button, Typography } from '@mui/material';
import { useForm } from "react-hook-form";

import callPythonApi from '../utils/callPythonApi'
import DynamicField from './inputMaker9000/DynamicField'

const PythonForm = ({setOutput}) => {
    const [message, setMessage] = useState('')
    const [yourName, setYourName] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => callPythonApi(JSON.stringify(data), setOutput);

  return (
    <Stack spacing={5}>
        <h1>
          Welcome to the name God
        </h1>

        <Typography>
          Tell me your name and I will use the magic of snake language to tell you your name
        </Typography>
       
        <Stack sx={{maxWidth: 400}} component='form' spacing={5} onSubmit={handleSubmit(onSubmit)}>
        <DynamicField register={register} />
        <Button type='submit' variant='contained'>Submit Name</Button>
        </Stack>

        <div>
         {message && <div>
            <h2>The snake gods say that your name is &rarr;</h2>
            <Typography>{yourName}</Typography>
          </div>}

         
        </div>
        </Stack>
  )
}

export default PythonForm