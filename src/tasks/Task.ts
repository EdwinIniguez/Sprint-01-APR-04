// Bridge es un patron de diseño estructural que permite que dos clases trabajen juntas sin necesidad de conocer la implementacion de la otra clase.
// Esto se logra mediante la creacion de una interfaz comun que ambas clases implementan. De esta manera, se puede cambiar la implementacion de una clase sin afectar a la otra clase.
// El patron Bridge es util cuando se tiene una jerarquia de clases y se quiere evitar la explosion de clases que puede ocurrir al combinar todas las posibles variaciones de las clases.

import { MessageSender } from "../senders/MessageSender";

export abstract class Task {
    protected sender: MessageSender;
    protected name: string;
    protected estimatedHours: number;

    //Constructor de la clase Task
    constructor(sender: MessageSender, name: string, estimatedHours: number) {
        this.sender = sender;
        this.name = name;
        this.estimatedHours = estimatedHours;
    }

    //Metodo abstracto para terminar la tarea
    abstract complete(realHours:number):void;
}