import { action, observable } from "mobx";
import { Task } from "../shared/interfaces";

export class TasksStore {
    @observable
    tasks: Array<Task> = []

    @action
    setTasks(tasks:Array<Task>) {
        this.tasks = tasks
    }

    @action
    updateTasks(tasks:Array<Task>) {
        this.tasks = tasks
    }
}
