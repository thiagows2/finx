'use client'

import { CircularProgress } from '@mui/material'
import { SpinnerContainer } from '@/themes/Spinner'

export default function Loading() {
  return (
    <SpinnerContainer>
      <CircularProgress />
    </SpinnerContainer>
  )
}
