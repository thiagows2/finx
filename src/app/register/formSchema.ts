import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Precisa ter no mínimo 3 caracteres'),
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: yup
    .string()
    .required('Informe uma senha')
    .min(3, 'Precisa ter no mínimo 3 caracteres'),
  confirmPwd: yup
    .string()
    .required('Informe uma senha')
    .oneOf([yup.ref('password')], 'As senhas informadas não correspondem')
})
