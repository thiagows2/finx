import { useForm } from 'react-hook-form'
import Modal from '@mui/material/Modal'

import { ModalContent, InputContainer, CloseIcon } from '@/themes/Modal'
import { ContainedButton } from '@/components/Button'
import { OutlinedInput } from '@/components/Input'
import { Text } from '@/components/Text'
import { MdClose } from 'react-icons/md'

interface Props {
  show: boolean
  onClose: () => void
}

export function AddExpenseModal({ show, onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function onSubmit(data: object) {
    console.log(data)
    onClose()
  }

  return (
    <div>
      <Modal open={show} onClose={onClose}>
        <ModalContent>
          <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <CloseIcon onClick={onClose}>
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
                {...register('value', { required: true })}
              />

              <OutlinedInput
                label="Categoria"
                sx={{ width: '100%' }}
                helperText={<>{errors.category && 'Obrigatório'}</>}
                {...register('category', { required: true })}
              />
            </InputContainer>
            <ContainedButton
              sx={{ margin: '32px 0' }}
              fullWidth={true}
              type="submit"
            >
              Adicionar
            </ContainedButton>
          </form>
        </ModalContent>
      </Modal>
    </div>
  )
}
