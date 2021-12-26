import { Controller, Post, Body,Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
   
    @Post('login')
    async login(@Body() data){
        return this.service.login(data);
    }

    @Post('register')
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}