import axios from "axios";

let instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {},
});

export default instance;
