// File: src/tasks/SimpleTask.ts
import { MessageSender } from "../senders/MessageSender";
import { Task } from "./Task";

export class SimpleTask extends Task {
    private realHours: number = 0;

    constructor(sender: MessageSender, name: string, estimatedHours: number) {
        super(sender, name, estimatedHours);
    }

    complete(realHours: number): void {
        this.realHours = realHours;
        const message = `La tarea ${this.name} ha sido completada en ${this.realHours} horas.`;
        console.log(message);
        this.sender.sendMessage(message);
    }
}

