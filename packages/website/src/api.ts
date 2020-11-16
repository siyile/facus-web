import axios from 'axios'
import {Res} from './Home'
import {UserInfo} from './features/Register/RegisterView'
import {LoginInfo} from './features/Register/SignIn'

const client = axios.create({
  baseURL: 'http://siyile.xyz:8090',
})

export const fetchCounter = async (): Promise<string> => {
  const response = await client.get('/counter')
  return response.data.results
}

export const login = async (info : LoginInfo) : Promise<string> => {
  const response = await client.post('/login', info)
  return response.data
}


export const register = async (user : UserInfo) : Promise<string> => {
  const response = await client.post('/register', user)
  return response.data
}

export const getProfile = async (): Promise<Res> => {
  const response = await client.get('/profile')
  return response.data
}