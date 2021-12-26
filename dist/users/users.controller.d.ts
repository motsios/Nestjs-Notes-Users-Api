import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
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
    create(user: User): Promise<{
        error: string;
        expiresIn?: undefined;
        token?: undefined;
    } | {
        expiresIn: number;
        token: string;
        error?: undefined;
    }>;
    deleteUser(params: any): Promise<{
        deleted: boolean;
        error?: undefined;
    } | {
        error: string;
        deleted?: undefined;
    }>;
}
