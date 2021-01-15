import { action, observable } from "mobx";

export class MainScreenStore {
    @observable
    isNewTaskFormOpen: boolean = false

    @action
    toggleIsNewTaskFormOpen() {
        this.isNewTaskFormOpen = !this.isNewTaskFormOpen
    }
}
