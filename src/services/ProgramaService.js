import CrudService from './CrudService';


 class ProgramaService extends CrudService{
    
    constructor(){
        super("programa");
    }

    

}
export default new ProgramaService();