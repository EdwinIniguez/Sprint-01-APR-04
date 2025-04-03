// CompositeTask.ts
// Implementacion de Task usando el patron Composite
// El patron Composite permite tratar objetos individuales y compuestos de la misma manera.
// Esto es util cuando se tiene una jerarquia de objetos y se quiere tratar a todos los objetos de la misma manera, sin importar si son compuestos o individuales.

import { Task } from "./Task";

export class CompositeTask extends Task {
    private subtask: Task[]=[];

    complete(realHours: number): void {
        console.log (`La tarea compuesta ${this.name} ha sido completada en ${realHours} horas.`);
        this.subtask.forEach((task) => task.complete(realHours/this.subtask.length));
    }

    addSubtask(task: Task): void {
        this.subtask.push(task);
    }
}