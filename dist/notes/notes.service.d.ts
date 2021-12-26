import { Repository } from 'typeorm';
import { Note } from './note.entity';
export declare class NotesService {
    private notesRepository;
    constructor(notesRepository: Repository<Note>);
    getNotes(): Promise<Note[]>;
    createNote(note: Note): Promise<{
        completed: boolean;
    }>;
    getNote(id: number): Promise<Note[]>;
    updateNote(id: number, note: Partial<Note>, res: any): Promise<Note>;
    deleteNote(id: number): Promise<{
        deleted: boolean;
        delete?: undefined;
    } | {
        delete: boolean;
        deleted?: undefined;
    }>;
}
