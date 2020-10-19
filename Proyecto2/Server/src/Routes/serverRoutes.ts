import {Router} from 'express';
import {serverController} from '../Controllers/serverController';

class ServerRoutes{
    public router:Router=Router();
    
    constructor(){
        this.config();
    }
    config():void {
        this.router.get('/',serverController.index);
    }
}
const serverRoutes=new ServerRoutes();
export default serverRoutes.router;