import axios from 'axios';
import CrudService from './CrudService';

const ALUNO_API_URL = "http://localhost:8080/aluno";

class AlunoService extends CrudService{
    constructor(){
       super("aluno");
    }
}

export default new AlunoService();