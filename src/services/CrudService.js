import axios from "axios";

const ESCOLA_API_URL="http://localhost:8080/";

 class CrudService {
   
    constructor(nome) {
      this.URL = ESCOLA_API_URL  + nome;
  }

  get() {
    return axios.get(this.URL);
  }

  getById(id) {
    return axios.get(this.URL + "/" + id);
  }

  update(el) {
    return axios.put(this.URL, el);
  }

  create(el) {
    return axios.post(this.URL, el);
  }

  delete(id) {
    return axios.delete(this.URL + "/" + id);
  }
}
export default  CrudService;
