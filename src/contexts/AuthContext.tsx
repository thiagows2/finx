'use client'

import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'

import { api } from '@/services/api'
import useAxios from 'axios-hooks'

type User = {
  name: string
  email: string
}

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const [, signInRequest] = useAxios(
    {
      url: '/Auth/login',
      method: 'POST'
    },
    { manual: true }
  )

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      setUser('Teste')
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const response = await signInRequest({ data: { email, password } })
    const { token, username } = response.data

    setCookie(undefined, 'finx.token', token, {
      maxAge: 60 * 60 * 3 // 3 hours
    })

    api.defaults.headers.Authorization = `Bearer ${token}`

    setUser(username)

    await router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
