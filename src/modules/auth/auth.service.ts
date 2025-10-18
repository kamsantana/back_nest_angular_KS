import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
<<<<<<< HEAD
=======
import { RegisterAuthDto } from './dto/register-auth.dto';
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}
<<<<<<< HEAD
    login(crendenciales: LoginAuthDto) {  

        let payload = {email:"admin@gmail.com", id:1}
        const token = this.jwtService.sign(payload);
        return {token:token};    
=======

    login(credenciales: LoginAuthDto) {
        let payload = { email: "admin@gmail.com", id: 1 };
        const token = this.jwtService.sign(payload);
        return { token: token };
    }

    register(userObj: RegisterAuthDto) {
        return userObj; 
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
    }
}