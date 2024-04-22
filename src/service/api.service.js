import axios from 'axios'
const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'acb2a752e5msh3e7cd350a64422fp1c8c63jsn06a7363f3961',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  }
};


export const ApiService = {
   async fetching(url) {
      const response = await axios.get(`${BASE_URI}/${url}`, options)
      return response
   }
}