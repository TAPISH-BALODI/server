import { Module } from '@nestjs/common';
import { databaseProviders } from './interface/database.providers';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }