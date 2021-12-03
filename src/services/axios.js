import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://itunes.apple.com/us/rss/topmovies/limit=100/json'
})

export default instance
