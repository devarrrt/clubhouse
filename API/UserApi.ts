import Axios from './../core/axios';
import { IUser } from './../pages/index';

export const UserApi = {
    getMe: async(): Promise<IUser> => {
        const {data} = await Axios.get('/auth/me')
        return data
    }
}