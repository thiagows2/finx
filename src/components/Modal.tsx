import { useForm } from 'react-hook-form'
import Modal from '@mui/material/Modal'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

import { ModalContent, InputContainer, CloseIcon, Error } from '@/themes/Modal'
import { ContainedButton } from '@/components/Button'
import { OutlinedInput } from '@/components/Input'
import { Text } from '@/components/Text'
import { MdClose } from 'react-icons/md'
import { Data } from '@/components/Table'
import { useState } from 'react'
import { showSuccess } from '@/components/Toast'
import { ToastContainer } from 'react-toastify'

type Props = {
  show: boolean
  setShow: (state: boolean) => void
  onAdd: (data: Data) => Promise<void>
  categories: string[]
}

export function AddExpenseModal({ show, setShow, onAdd, categories }: Props) {
  const [loading, setLoading] = useState(false)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function closeModal() {
    setShow(false)
    reset()
  }

  async function onSubmit(data: object) {
    setLoading(true)
    await onAdd(data as Data)
    showSuccess('Despesa adicionada!')
    closeModal()
    setLoading(false)
  }

  return (
    <>
      <Modal open={show} onClose={() => closeModal()}>
        <ModalContent>
          <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <CloseIcon onClick={() => closeModal()}>
              <MdClose size={24} />
            </CloseIcon>
            <Text.Title fontSize={18}>Nova despeza</Text.Title>
            <InputContainer>
              <OutlinedInput
                label="Descrição"
                helperText={<>{errors.description && 'Obrigatório'}</>}
                sx={{ width: '100%', marginTop: '16px' }}
                {...register('description', { required: true })}
              />

              <OutlinedInput
                label="Valor"
                helperText={<>{errors.value && 'Obrigatório'}</>}
                sx={{ width: '100%' }}
                {...register('cost', { required: true, valueAsNumber: true })}
              />
              <FormControl size="small">
                <InputLabel>Categoria</InputLabel>
                <Select
                  defaultValue=""
                  label="Categoria"
                  sx={{ width: '100%' }}
                  {...register('type', { required: true })}
                >
                  {categories.map((category: string, index) => (
                    <MenuItem key={`${category}_${index}`} value={index}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
                <Error>{errors.category && 'Obrigatório'}</Error>
              </FormControl>
            </InputContainer>
            <ContainedButton
              sx={{ margin: '24px 0' }}
              fullWidth={true}
              type="submit"
              loading={loading}
            >
              Adicionar
            </ContainedButton>
          </form>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </>
  )
}
