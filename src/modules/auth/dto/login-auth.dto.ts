<<<<<<< HEAD
import {IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";
import {User} from "../interfaces/user.interface";

export class LoginAuthDto implements User {
@IsEmail()
@IsNotEmpty()
email: string;
@MinLength(6)  
@MaxLength(255)
@IsNotEmpty()
  password: string;
=======
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { User } from "../interfaces/user.interface";

export class LoginAuthDto implements User {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(6)
    @MaxLength(25)
    @IsNotEmpty()
    password: string;
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
}