import * as yup from 'yup';
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const validationSchema = yup.object().shape({
        name: yup
            .string()
            .min(4, 'Se requiere minimo 4 caracteres')
            .max(20, 'No mas de 20 caracteres')
            .required(),
        lastName: yup
            .string()
            .min(4, 'Se requiere minimo 4 caracteres')
            .max(20, 'No mas de 20 caracteres')
            .required(),
        email: yup
            .string()
            .email('El email no es valido')
            .matches(EMAIL_REGEX)
            .required(),
        password: yup.string().matches(PASSWORD_REGEX, 'No es valido ').required(),
        confirmPassword:yup.string().required().label('Confirme su contraseña por favor').test('passwords-match', 'Las contraseñas deben coincidir',function (value){
            return this.parent.password === value
        }),
        agreeToTerms: yup.boolean().label('Debe aceptar los términos').test('is-true','Debe aceptar los términos', value => value === true)
    });