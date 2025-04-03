import { Database } from "./database/Database";
import { TaskFactory } from "./factories/TaskFactory";
import { TelegramSender } from "./senders/TelegramSender";

const sender = new TelegramSender();
const db = Database.getInstance();

const task1 = TaskFactory.createTask("Tarea 1", 2, sender);
const task2 = TaskFactory.createTask("Tarea 2", 10, sender);
const task3 = TaskFactory.createTask("Tarea 3", 3, sender);

task1?.complete(5);
task2?.complete(15);

db.addTask(task1);
db.addTask(task2);
db.addTask(task3);

console.log("Tareas en la base de datos:", db.getTasks());