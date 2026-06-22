import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 240000,
})

export async function fetchModels() {
  const response = await api.get('/models')
  return response.data.models || []
}

export async function sendChatRequest(body) {
  const response = await api.post('/chat', body)
  return response.data
}
