import {NextFunction, Request, Response} from 'express';
import { TodoApi } from '../resources/todo';
export class commonController {
    static getHelloWorld(req:Request,res:Response,next:NextFunction) {
        res.send('Welcome  to ToDo-App Api');
    }

    static postTodo(req:Request,res:Response,next:NextFunction) {
        console.log("req body : ",req.body)
        const todo = TodoApi.postTodo(req.body);
        res.send(todo);
    }

    static async getTodos(req:Request,res:Response,next:NextFunction) {
        const response = await TodoApi.getTodos();
        if(response !== -1) {
            res.send(response);
        } else {
            res.send('Error Occured');
        }
        
        
    }
}


