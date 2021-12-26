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
const notes_service_1 = require("./notes.service");
const note_entity_1 = require("./note.entity");
let NotesController = class NotesController {
    constructor(service) {
        this.service = service;
    }
    getAll() {
        return this.service.getNotes();
    }
    get(userId) {
        return this.service.getNote(userId);
    }
    create(note) {
        return this.service.createNote(note);
    }
    update(params, note, res) {
        return this.service.updateNote(params.noteId, note, res);
    }
    delete(params) {
        return this.service.deleteNote(params.noteId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "getAll", null);
__decorate([
    common_1.Get(':userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "get", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [note_entity_1.Note]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "create", null);
__decorate([
    common_1.Put(':noteId'),
    __param(0, common_1.Param()), __param(1, common_1.Body()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "update", null);
__decorate([
    common_1.Delete(':noteId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "delete", null);
NotesController = __decorate([
    common_1.Controller('notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
exports.NotesController = NotesController;
//# sourceMappingURL=notes.controller.js.map