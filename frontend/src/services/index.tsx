import axios from 'axios'

const API_URL = process.env.API_URL;
const API_URL_MOCK = process.env.API_URL_MOCK;

export const getCourtSearchesData = async () => {
  try {
    const response = await axios.get(`${API_URL_MOCK}/courtSearches`)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const getUserByEmail = async (email: string) => {
  try {
    const response = await axios.get(`${API_URL}/users?email=${email}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const addUser = async (email: string, name: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users/save`, {
      email: email,
      name: name,
      password: password
    })
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const getCandidatesData = async () => {
  try {
    const response = await axios.get(`${API_URL}/candidates`)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const updateCandidateData = async (id: number, adjudication: string, status: string) => {
  try {
    const infodatares = await getCandidateInfo(id.toString())
    const { eventDate, location, name } = infodatares
    const response = await axios.put(`${API_URL}/candidates/${id}`, {
      id,
      name,
      adjudication: adjudication,
      status: status,
      location,
      eventDate
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getCandidateDetails = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/candidates/${id}/candidate-info`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export const getCandidateInfo = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/candidates/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
