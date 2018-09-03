import axios from "axios";
import * as env from "@/.env";
import store from "@/store";
import _ from "lodash";

const getAxios = () => {
  const idToken = _.get(store.state, "auth.user.idToken", false)
  let headers = {};
  if (idToken) {
    headers = Object.assign({}, headers, {
      Authorization: `Bearer ${idToken}`
    });
  }

  let options = {
    baseURL: env.API,
    timeout: env.API_TIMEOUT,
    headers
  };

  return axios.create(options)
};

export default getAxios
