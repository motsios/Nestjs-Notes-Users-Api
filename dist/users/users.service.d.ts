import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(user: User): Promise<{
        error: string;
        expiresIn?: undefined;
        token?: undefined;
    } | {
        expiresIn: number;
        token: string;
        error?: undefined;
    }>;
    login(data: any): Promise<{
        expiresIn: number;
        token: string;
        name: string;
        id: number;
        error?: undefined;
    } | {
        error: string;
        expiresIn?: undefined;
        token?: undefined;
        name?: undefined;
        id?: undefined;
    }>;
    deleteUser(id1: number): Promise<{
        deleted: boolean;
        error?: undefined;
    } | {
        error: string;
        deleted?: undefined;
    }>;
}
