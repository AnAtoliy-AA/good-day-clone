import { action, get, observable, set } from "mobx";

export default class AuthStore {

    constructor() {}

    /**
     * В объект items записываются данные каждого из экзепляров компонента Button при их создании
     */
    @observable items = new Map([])    

    /**
     * Регистрация экземпляра компонента
     */
    @action registration = (params: { name: any; disabled: any; }) => {        
        const nameExists = get(this.items, params.name);      
        // if (!blockValidate({params, nameExists, type: "Button"})) return false;
        // расширяем items новым объектом
        const value = {           
            disabled : params.disabled,       
            isClicked : false     
        };
        set(this.items, params.name, value);      
    };

    /**
     * Открепление экземпляра компонента
     */
    @action unmount = (name: unknown) => {
        this.items.delete(name);
    };

    /**
    //  * Нажатие на кнопку
    //  */
    @action bindClick = (e: { preventDefault: () => void; }, name: string) => {
        e.preventDefault();       
        get(this.items, name).isClicked = true;       
    };

}