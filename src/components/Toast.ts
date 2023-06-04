import { toast, ToastOptions } from 'react-toastify'

const defaultOptions: ToastOptions<{}> = {
  position: 'bottom-left',
  theme: 'colored'
}

export function showError(message: string) {
  toast.error(message, defaultOptions)
}

export function showSuccess(message: string) {
  toast.success(message, defaultOptions)
}
