import { NotesService } from './notes.service';
import { Note } from './note.entity';
export declare class NotesController {
    private service;
    constructor(service: NotesService);
    getAll(): Promise<Note[]>;
    get(userId: number): Promise<Note[]>;
    create(note: Note): Promise<{
        completed: boolean;
    }>;
    update(params: any, note: Partial<Note>, res: any): Promise<Note>;
    delete(params: any): Promise<{
        deleted: boolean;
        delete?: undefined;
    } | {
        delete: boolean;
        deleted?: undefined;
    }>;
}
