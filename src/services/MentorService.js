import axios from 'axios';
import CrudService from './CrudService';


 class MentorService extends CrudService{
    
    constructor(){
        super("mentor");
    }

    

}
export default new MentorService();