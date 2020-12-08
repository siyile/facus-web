import axios from 'axios'
import { Res } from './Home'
import { UserInfo } from './features/Register/RegisterView'
import { LoginInfo } from './features/Register/SignIn'
import Session from './Model/session'

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? '' : 'http://siyile.xyz:8090',
  withCredentials: true,
})

export const fetchCounter = async (): Promise<string> => {
  const response = await client.get('/counter')
  return response.data.results
}

export const login = async (info: LoginInfo): Promise<string> => {
  const response = await client.post('/login', info)
  return response.data
}

export const register = async (user: UserInfo): Promise<string> => {
  const response = await client.post('/register', user)
  return response.data
}

export const startMatch = async (goal: string): Promise<string> => {
  const response = await client.post('/session/match', {'tag': goal})
  return response.data
}

export const getProfile = async (): Promise<Res> => {
  const response = await client.get('/profile')
  return response.data
}

export const getSessionById = async (sid : string): Promise<Session> => {
  const response = await client.get('/session/' + sid)
  return response.data
}

export const getAllSession = async (): Promise<Array<Session>> => {
  const response = await client.get('/session')
  return response.data
}

export const getUserSession = async (): Promise<Array<Session>> => {
  const response = await client.get('/session/user')
  return response.data
}
