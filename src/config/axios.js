import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://my-subs-api.herokuapp.com/",
});

export default clienteAxios;
