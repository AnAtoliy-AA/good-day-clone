import AuthStore from "./AuthStore";

export default class mainStore {
    [x: string]: AuthStore;
    static AuthStore: any;
    constructor() {
        this.Authstore = new AuthStore(); 
    }
}