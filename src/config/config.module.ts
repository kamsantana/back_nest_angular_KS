import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
<<<<<<< HEAD
  providers: [ConfigService]
})
export class ConfigModule {}
=======
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
