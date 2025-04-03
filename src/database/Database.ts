// Esto sera un Singleton
// el objetivo es que la base de datos sea una sola instancia en toda la aplicacion

// Haremos una clase para la base de datos que contenga los metodos para conectarse a la base de datos y ejecutar consultas


export class Database {
    private static instance: Database;
    private task: any[] = [];

    private constructor() {
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    addTask(task: any) {
        this.task.push(task);
    }

    getTasks() {
        return this.task;
    }

}