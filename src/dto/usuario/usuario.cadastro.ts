import { Injectable } from "@nestjs/common";
import { IsEmail,IsNotEmpty,MinLength } from "class-validator";
import { EmailUniqueValidation } from "src/validations/email.unico";


@Injectable()
export class UsuarioDTO{
   
    @IsNotEmpty()
    nome:string;

    @IsEmail()
    @EmailUniqueValidation({message:"Já existe usuário cadastrado com este e-mail"})
    email:string;

    @MinLength(8)
    senha:string;
}