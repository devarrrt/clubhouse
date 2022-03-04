import jwt from 'jsonwebtoken'
import { IUser } from '../pages'

export const createJWT = (user: IUser): string => {
    const token = jwt.sign(
        {
            data: user
        },
       process.env.JWT_SECRET_KEY || '',
    {
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: 'HS256',
    },
    )
    return token
}