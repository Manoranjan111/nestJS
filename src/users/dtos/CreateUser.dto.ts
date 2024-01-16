import { IsEmail, IsNotEmpty } from "class-validator";


export class SignupUserDto{
    @IsNotEmpty()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password:string;
}

export class LoginUserDto{
    @IsEmail()
    email:string;

    @IsNotEmpty()
    password:string;
}