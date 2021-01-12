import { action, observable } from "mobx";

export class AuthStore {
    @observable
    token: string = ''

    @observable
    someName: string = ''

    @action
    setToken(token:string) {
        this.token = token
    }
   

}

// export default new AuthStore();