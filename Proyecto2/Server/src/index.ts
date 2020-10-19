import express, {Application} from 'express';//lo del los parentesis se define el tipo de dato
import morgan from 'morgan';//se pueden ver las peticiones que se hacen
import cors from 'cors';
import serverRoutes from './Routes/serverRoutes';

class Server{
    public app:Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port',process.env.PORT || 3000);//el process es para que si ya existe un puerto definido se toma eso
        this.app.use(morgan('dev'));//el dev es para ver lo que estan pidiendo los clientes
        this.app.use(cors());//pedir los datos del servidor
        this.app.use(express.json());//para que entienda el formato json y guarda en un req.body
        this.app.use(express.urlencoded(({extended:false})));//por si para usar formato html   
    }
    routes():void{
        this.app.use('/',serverRoutes);
    }
    start():void{//inicializa el servidor -> para que empiece a escuchar
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port '+this.app.get('port'));
        });
    }
}
export const server=new Server();//ejecuta el constructor
server.start();
