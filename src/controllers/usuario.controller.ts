import { Controller, Post,Body,Get } from "@nestjs/common";
import { UsuarioDTO } from "src/dto/usuario/usuario.cadastro";
import { UsuarioEntity } from "src/entities/usuario.entity";
import { UsuarioRepository } from "src/repository/usuario.repository";
import { v4 as uuid } from "uuid";

@Controller("/usuarios")
export class UsuarioController{
    
    
    /**
     * @description Construtor da classe;
     */
    constructor(private usuarioRepository:UsuarioRepository, private usuarioDto:UsuarioDTO ){
        
    }
    /**
     * @params { Usuario } - { nome,email,senha}
     * @description Cadastro de usuário
     * @returns HTTP.200 OK - HTTP.400 ERROR
     */    
    @Post("/cadastro")
    async  cadastro(@Body() createUser:UsuarioDTO) {
        const usuarioEntity= new UsuarioEntity();

        usuarioEntity.email=createUser.email;
        usuarioEntity.nome=createUser.nome;
        usuarioEntity.senha=createUser.senha;
        usuarioEntity.id=uuid();

        this.usuarioRepository.salvar(usuarioEntity);      
        return { 
            id:usuarioEntity.id,
            message:"Usuário criado com sucesso"
        };
    }


    @Get("/buscar")
    async buscarUsuarios(){
        return this.usuarioRepository.listar();
    }
}