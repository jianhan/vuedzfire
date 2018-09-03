import axios from 'axios'
import * as env from '@/.env'
import store from '@/store'
console.log("STORE OUTSIDE",store.state.auth.user)
let options = {
  baseURL: env.API,
  timeout: env.API_TIMEOUT,
}

const instance = axios.create(options);

export default instance