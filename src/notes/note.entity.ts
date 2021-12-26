import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {User} from "../users/user.entity";

@Entity('notes')
export class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    title:string;

    @Column()
    content:string;
    

    @Column() 
    createdAt:Date;


    @Column()
    userId:number;
  
   // @ManyToOne(type => User, user => user.notes)
   // user: User;
 }