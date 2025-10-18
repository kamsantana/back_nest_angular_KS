import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
<<<<<<< HEAD
import { ConfigService } from 'src/config/config.service';

@Module({
    providers: [...databaseProvider,ConfigService],
    exports: [...databaseProvider],
})
export class DatabaseModule {

}
=======
import { ConfigService } from 'src/config/config.service'

@Module({
  providers:[...databaseProvider, ConfigService],
  exports:[...databaseProvider]
})
export class DatabaseModule {

}
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
