import axios from 'axios'
import Cookies, {parseCookies} from 'nookies'
  
const cookies = parseCookies()

const Axios = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        Authorization: 'Bearer ' + cookies?.token
    }
})

export default Axios