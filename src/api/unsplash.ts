import axios from 'axios'

export default axios.create(({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID PW26XerIP7E3Y63PpX0qQOY7MNa4fzSEO567zcVPfXY'
  }
}))