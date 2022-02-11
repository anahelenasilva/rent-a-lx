import { UserRepository } from '../modules/accounts/repositories/UserRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({ message: 'Token not provided' })
    }

    const [, token] = authHeader.split(' ')

    try {
        const { sub } = verify(token, 'c65415a1e71c604075ec15799e54aae3') as IPayload
        const userRepository = new UserRepository()
        const user = await userRepository.getById(sub)

        if (!user) {
            throw new Error('User not found')
        }

        next()
    } catch (error) {
        throw new Error('Invalid token');

    }
}