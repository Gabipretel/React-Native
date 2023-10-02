import * as yup from 'yup'
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
export const schema = yup.object()
    .shape({
        firstName: yup.string().max(20,'El nombre no puede tener mas de 20 caracteres').required('El nombre es requerido').min(8,'8 minimo.....'),
        lastName: yup.string().max(20,'El nombre no puede tener mas de 20 caracteres').required('El apellido es requerido'),
        email: yup.string().required('El email es requerido').email('Email Invalido').matches(EMAIL_REGEX),
        password: yup.string().required('El password es requerido').min(8, 'La contraseña debe tener al menos 8 caracteres').matches(PASSWORD_REGEX,'Debe contener mayusculas,minusculas'),
    })
    .required();