import axios from 'axios'
import * as Cookies from 'js-cookie'
import config from '../public/config'

 const api = () => {
    const authToken = Cookies.get('authToken')
    return axios.create({
        baseURL: config.api,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: authToken ? `Bearer ${authToken}` : null  as any
        }
    })
}

export default api


