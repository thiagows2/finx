'use client'

import useAxios from 'axios-hooks'
import { createContext, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { api } from '@/services/api'

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
  signOut: () => Promise<void>
}

const jwtSchema = {
  email: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
  username: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user
  const router = useRouter()

  console.log('user', user)

  const [, signInRequest] = useAxios(
    {
      url: '/Auth/login',
      method: 'POST',
      baseURL: api.defaults.baseURL
    },
    { manual: true }
  )

  function parseJwt(token: string) {
    if (!token) return

    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  }

  useEffect(() => {
    const { 'finx.token': token } = parseCookies()
    const data = parseJwt(token)
    const user = {
      name: data && data[jwtSchema.username],
      email: data && data[jwtSchema.email]
    }

    if (user.name) {
      setUser(user)
    } else {
      router.push('/login')
    }
  }, [router])

  async function signIn({ email, password }: SignInData) {
    const response = await signInRequest({ data: { email, password } })
    const { token, username, email: userEmail } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`

    setCookie(undefined, 'finx.token', token, {
      maxAge: 60 * 60 * 3 // 3 hours
    })

    setUser({
      name: username,
      email: userEmail
    })

    await router.push('/dashboard')
  }

  async function signOut() {
    setUser(null)
    setCookie(undefined, 'finx.token', '', {
      maxAge: 0
    })

    await router.push('/login')
  }

  return (
    // @ts-ignore
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
