import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 240000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function fetchModels() {
  const response = await api.get('/models')
  const data = response.data

  if (Array.isArray(data)) {
    return data
  }

  if (Array.isArray(data.models)) {
    return data.models
  }

  return []
}

export async function sendChatRequest(body) {
  const response = await api.post('/chat', body)
  return response.data
}