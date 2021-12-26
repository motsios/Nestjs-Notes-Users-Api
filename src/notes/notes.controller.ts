import { Controller, Post, Body, Get, Put, Delete,Param, Res } from '@nestjs/common';
import {NotesService} from './notes.service';
import {Note} from './note.entity';

@Controller('notes')
export class NotesController {

constructor(private service:NotesService) { }

@Get()
getAll(){
    return this.service.getNotes();
}
@Get(':userId')
get(@Param('userId') userId:number) {
    return this.service.getNote(userId);
}

@Post()
create(@Body() note: Note) {
    return this.service.createNote(note);
}

@Put(':noteId')
update(@Param() params,@Body() note:Partial<Note>,@Res() res:any) {
    return this.service.updateNote(params.noteId,note,res);
}

@Delete(':noteId')
delete(@Param() params) {
    return this.service.deleteNote(params.noteId);
}
}