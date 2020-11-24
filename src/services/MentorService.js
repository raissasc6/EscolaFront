import CrudService from './CrudService';


 class MentorService extends CrudService{
    
    constructor(){
        super("mentor");
    }

    

}
export default new MentorService();