

export class TodoApi {
    static async postTodo(obj: any) {
        try {
            console.log("obj : ",obj);
            // const coupon = await todo.create({  id: obj.id,
            //     name: obj.name,
            //     description: obj.description, 
            //     status: obj.status, 
            //     }
            // );
            // console.log("coupon : ",coupon);
        } catch(e) {
            throw Error(e.message);
        }
    }

    static async getTodos() {
        try {
            
            // const coupon = await todo.todos.list();
            // return coupon;
        } catch {
            throw Error("Error Occured while getting todo list");
            return -1;
        }
       
    }
}




