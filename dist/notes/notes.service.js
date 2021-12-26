"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const note_entity_1 = require("./note.entity");
let NotesService = class NotesService {
    constructor(notesRepository) {
        this.notesRepository = notesRepository;
    }
    async getNotes() {
        return await this.notesRepository.find();
    }
    async createNote(note) {
        note.createdAt = new Date();
        const newNote = await this.notesRepository.create(note);
        await this.notesRepository.save(newNote);
        return { completed: true };
    }
    async getNote(id) {
        const findUserId = await this.notesRepository.findOne({ where: { userId: id } });
        if (findUserId) {
            return await this.notesRepository.find({
                select: ["title", "content", "createdAt", "id"],
                where: [{ "userId": id }]
            });
        }
        else {
            throw new common_1.BadRequestException('Invalid user');
        }
    }
    async updateNote(id, note, res) {
        const findNote = await this.notesRepository.findOne({ where: { id: id } });
        if (!findNote) {
            res.json({ error: "This noteId does not exist" });
        }
        else {
            note.createdAt = new Date();
            res.json({ update: "Successfully" });
            await this.notesRepository.update(findNote.id, note);
            return await this.notesRepository.findOne(findNote.id);
        }
    }
    async deleteNote(id) {
        const findNoteId = await this.notesRepository.findOne({ where: { noteId: id } });
        if (findNoteId) {
            this.notesRepository.delete(id);
            return { deleted: true };
        }
        else {
            return { delete: false };
        }
    }
};
__decorate([
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], NotesService.prototype, "updateNote", null);
NotesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(note_entity_1.Note)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map