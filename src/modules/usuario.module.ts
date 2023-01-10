import { Module } from "@nestjs/common";
import { UsuarioController } from "src/controllers/usuario.controller";
import { UsuarioDTO } from "src/dto/usuario/usuario.cadastro";
import { UsuarioRepository } from "src/repository/usuario.repository";
import { EmailUnique } from "src/validations/email.unico";

@Module({
    imports:[],
    controllers:[UsuarioController],
    providers:[UsuarioRepository,UsuarioDTO,EmailUnique]
})

export class UsuarioModule{};
