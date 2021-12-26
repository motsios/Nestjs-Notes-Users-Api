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
const user_entity_1 = require("./user.entity");
const jwt = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async createUser(user) {
        const { email } = user;
        const findUser = await this.usersRepository.findOne({ where: { email: email } });
        if (findUser) {
            return { error: "User already exists" };
        }
        else {
            const newUser = await this.usersRepository.create(user);
            if (user.password != "") {
                await this.usersRepository.save(newUser);
                const expiresIn = 3600;
                const token = jwt.sign({ id: user.id,
                    username: user.firstName,
                    lastName: user.lastName,
                    password: user.password,
                    email: user.email }, "Codebrains", { expiresIn });
                return { expiresIn, token };
            }
            else {
                return { error: "Null password" };
            }
        }
    }
    async login(data) {
        const { email, password } = data;
        const user = await this.usersRepository.findOne({ where: { email: email, password: password } });
        if (user) {
            const name = user.firstName;
            const expiresIn = 3600;
            const token = jwt.sign({ id: user.id,
                username: user.firstName,
                lastName: user.lastName,
                password: user.password,
                email: user.email }, "Codebrains", { expiresIn });
            return { expiresIn, token, name, id: user.id };
        }
        else {
            return { error: "wrong username or password" };
        }
    }
    async deleteUser(id1) {
        const findUser = await this.usersRepository.findOne({ where: { id: id1 } });
        if (findUser) {
            this.usersRepository.delete(id1);
            return { deleted: true };
        }
        else {
            return { error: "User not exists" };
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map