import axios from 'axios'

const client = axios.create({
  baseURL: 'http://siyile.xyz:8090',
})

export const fetchCounter = async (): Promise<string> => {
  const response = await client.get('/counter')
  return response.data.results
}
