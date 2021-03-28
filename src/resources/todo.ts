

export class TodoApi {
    static async postTodo(obj: any) {
        try {
            console.log("obj : ",obj);
            // const todo = await todo.create({  id: obj.id,
            //     id: obj.id,
            //     title: obj.title, 
            //     status: obj.status, 
            //     }
            // );
            // console.log("todo : ",todo);
        } catch(e) {
            throw Error(e.message);
        }
    }

    static async getTodos() {
        try {
            
            // const todo = await todo.todos.list();
            // return todo;
        } catch {
            throw Error("Error Occured while getting todo list");
            return -1;
        }
       
    }
}




