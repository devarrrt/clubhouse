import { GetServerSidePropsContext } from 'next';
import Cookies from 'nookies';
import Axios from './core/axios';
import { UserApi } from './API/UserApi';
import { IUser } from './pages/index';

export const checkAuth = async (ctx: GetServerSidePropsContext): Promise<IUser | null> => {
  try {
    const cookies = Cookies.get(ctx);
    if (cookies.token) {
      //@ts-ignore
      Axios.defaults.headers.Authorization = `Bearer ${cookies.token}`;
    }
  return await UserApi.getMe()
  } catch (e) {
    return null;
  }
};
