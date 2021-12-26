import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from './user.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
   

    constructor(
        @InjectRepository(User)
     private usersRepository: Repository<User>) { }


    async createUser(user:User){
        const {email} = user;
        const findUser = await this.usersRepository.findOne({ where: {email:email} });
        if (findUser){
            return {error:"User already exists"}//sigkrinw an brike ton xrisit me to email.
        }else{
            const newUser=await this.usersRepository.create(user);
            if(user.password!=""){
             await this.usersRepository.save(newUser);
             const expiresIn = 3600;
              const token=jwt.sign({id:user.id, 
                username: user.firstName,
                lastName: user.lastName,
                password:user.password,
                email:user.email},"Codebrains",{expiresIn})
            return {expiresIn,token};
           }
           else{
           return {error:"Null password"}
           }
        }
    }

    async login(data){
       const {email,password} = data;
       
       const user = await this.usersRepository.findOne({ where: { email:email,password:password}});
        if (user){
            const name=user.firstName
            const expiresIn = 3600;
            const token=jwt.sign({id:user.id, 
                username: user.firstName,
                lastName: user.lastName,
                password:user.password,
                email:user.email},"Codebrains",{expiresIn})
        return {expiresIn,token,name,id:user.id }
         }else{
            return{error:"wrong username or password"}
         }        
    }
     
    async deleteUser(id1:number) {
        const findUser = await this.usersRepository.findOne({ where: {id:id1} });
        if (findUser){
            this.usersRepository.delete(id1);
            return {deleted:true};
        }
        else
        {
        return {error:"User not exists"}
        }
    }
}