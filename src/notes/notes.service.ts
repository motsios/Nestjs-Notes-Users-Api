import { Injectable, Res, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
constructor(
    @InjectRepository(Note)
 private notesRepository: Repository<Note>) { }

    async getNotes(){
    return await this.notesRepository.find();
    }


    async createNote(note:Note){
        note.createdAt=new Date()
      const newNote=await this.notesRepository.create(note);
      await this.notesRepository.save(newNote);
      return {completed:true};
    }


     async getNote(id:number): Promise<Note[]>  {
        const findUserId = await this.notesRepository.findOne({ where: {userId:id}});
        if(findUserId){
        return await this.notesRepository.find({
            select: ["title", "content", "createdAt","id"],
            where: [{ "userId": id }]
        });
        } else
           {
            throw new BadRequestException('Invalid user');
          } 
    }
   
    async updateNote(id:number,note: Partial<Note>,@Res() res:any) {
        
        const findNote = await this.notesRepository.findOne({ where: {id:id} });
        if(!findNote){
        res.json({error:"This noteId does not exist"})}
        else{
            note.createdAt=new Date()
        res.json({update:"Successfully"})
        await this.notesRepository.update(findNote.id,note);
        return await this.notesRepository.findOne(findNote.id);
        }
    } 

    async deleteNote(id:number) {
        const findNoteId = await this.notesRepository.findOne({ where: {noteId:id}});
        if(findNoteId){
        this.notesRepository.delete(id);
        return {deleted:true};
        }
         else{
          return {delete:false};
        }
    }

}