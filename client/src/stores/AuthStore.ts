import { action, observable } from "mobx";

export class AuthStore {
    @observable
    token: string = ''

    @observable
    isAuth: boolean = false

    @action
    setToken(token:string) {
        this.token = token
    }
   
    @action
    setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth
    }
}
