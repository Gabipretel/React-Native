import * as Yup from 'yup';
import { object, string } from 'yup';

export const validationSchema =object({
    name: string().required('Name is required').label('Name'),
    email: string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
    password: string()
    .matches( /^[A-Za-z\d@$!%*?&-_.]{8,20}$/, 'Debe tener minusculas, mayusculas,numeros')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
    });


