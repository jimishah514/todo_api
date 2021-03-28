import {Router}from 'express';
import {commonController} from '../controllers/common';
import { requireAuthUser } from '../middlewares/auth';
export const router = Router();
router.get( "/", 
   requireAuthUser(),
   commonController.getHelloWorld);

router.post( "/todo", 
   requireAuthUser(),
   commonController.postTodo);

   router.get( "/todos", 
   requireAuthUser(),
   commonController.getTodos);