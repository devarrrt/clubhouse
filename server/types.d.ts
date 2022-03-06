import { IUser } from './../pages/index';

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}