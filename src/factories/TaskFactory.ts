import { MessageSender } from "../senders/MessageSender";
import { SimpleTask } from "../tasks/SimpleTask";
import { CompositeTask} from "../tasks/CompositeTask";

export class TaskFactory {
    static createTask(
        name: string,
        estimatedHours: number,
        sender: MessageSender,
    ){
        if (estimatedHours > 4) {
            console.log("la tarea es muy larga, se recomienda dividirla en subtareas.");
            const compositeTask = new CompositeTask(sender, name, estimatedHours);
            for(let i = 0; i < estimatedHours/4; i++) {
                const subtask = new SimpleTask(sender, `${name} - subtarea ${i + 1}`, 4);
                compositeTask.addSubtask(subtask);
            }
            return compositeTask;
        } else {
            return new SimpleTask(sender, name, estimatedHours);
        }
    }
}