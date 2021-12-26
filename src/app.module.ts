import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { Connection } from 'typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({  
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "noteApp",
    entities: [__dirname+"/**/*entity{.ts,.js}"],
    synchronize: true}),
    UsersModule,
    NotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}

}
