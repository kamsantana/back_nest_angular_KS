<<<<<<< HEAD
import { Body,Controller, Post } from '@nestjs/common';
=======
import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
<<<<<<< HEAD

constructor(private authService: AuthService) {
}

    @Post('register')
    registerUser(@Body() userObj: RegisterAuthDto) {
        console.log(userObj);
        return userObj;
    }

    @Post('login')
    login(@Body() crendenciales: LoginAuthDto) {
        return this.authService.login(crendenciales);
    }
}
=======
    constructor(private authService: AuthService) {
        
    }

    @Post('register')
    registerUser(@Body() userObj: RegisterAuthDto) {
        return this.authService.register(userObj); 
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto) {
        return this.authService.login(credenciales);
    }

    @UseGuards(AuthGuard('jwt')) 
    @Get('profile')
    profile(@Req() req) {
        return req.user; 
    }
}
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
