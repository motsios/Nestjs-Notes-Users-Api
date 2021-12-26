import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import {Note} from "../notes/note.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    firstName:string;

    @Column()
    lastName:string;
    
    @Column() 
    password:string;

    @Column() 
    email:string;
   
 //  @OneToMany(type => Note, note => note.user)
  // notes: Note[];
}