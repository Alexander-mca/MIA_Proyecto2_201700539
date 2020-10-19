import {Request, Response} from 'express';

class ServerController{
    
    public index(req:Request,res:Response){
        res.json( {text:'Bienvenido'})
    }
}
export const serverController=new ServerController();