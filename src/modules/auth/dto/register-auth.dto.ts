<<<<<<< HEAD
import {PartialType} from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
import {IsNotEmpty} from "class-validator";
=======
import { PartialType } from "@nestjs/mapped-types";
import { LoginAuthDto } from "./login-auth.dto";
import { IsNotEmpty } from "class-validator";
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    name: string;
}