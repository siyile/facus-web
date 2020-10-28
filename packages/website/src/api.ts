import axios from 'axios'

const client = axios.create({
  baseURL: 'http://facus-api.siyile.xyz:8080',
})

export const fetchCounter = async (): Promise<string> => {
  const response = await client.get('/counter')
  return response.data.results
}
