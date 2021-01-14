import axios from 'axios';
import { useStore } from '../hooks/hooks';

//TODO
const CreateApi = () => {
    const authStore = useStore('authStore')

    const instance = axios.create({
        withCredentials: true,
        baseURL: '/api/',
        headers: {
            authorization: authStore.token
        }
    })

    return instance
}

export const tasksAPI = {
    getTasks() {
        return CreateApi().get(`task`)
            .then(response => response.data);
    },
    deleteItem(itemId: string) {
        return CreateApi().delete(`task/${itemId}`)
    },
    getItem(itemId: string) {
        return CreateApi().get(`task/${itemId}`)
        .then(response => response.data);
    }
}

