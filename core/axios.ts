import axios from 'axios'
import Cookies from 'js-cookie'
  

const Axios = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        Authorizaion: 'Basic' + Cookies.get('token')
    }
})

export default Axios