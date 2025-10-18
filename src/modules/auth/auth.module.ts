import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
<<<<<<< HEAD
  imports:[
    JwtModule.register({
      secret: 'MI CODIGO SECRETO',
      signOptions: { expiresIn: '3600s' }
    })
  ],

  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
 
=======
  imports: [
    JwtModule.register({
      secret: "MI_CODIGO_SECRETO",
      signOptions:{expiresIn: '60s'}
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
