import { Injectable } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUniqueValidation } from "src/validations/email.unico";

@Injectable()
export class AtualizaUsuarioDTO{

    @IsNotEmpty({message:"Nome não pode ser vazio"})
    @IsOptional()
    nome:string;

    @IsEmail()
    @IsOptional()
    @EmailUniqueValidation({message:"Já existe usuário cadastrado com esse e-mail"})
    email:string;

    @MinLength(8)
    @IsOptional()
    senha:string;
}