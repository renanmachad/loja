import { Controller, Post,Body,Get, Put, Param, Delete } from "@nestjs/common";
import { AtualizaUsuarioDTO } from "src/dto/usuario/usuario.atualiza";
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

        return this.usuarioRepository.salvar(usuarioEntity);      
       
    }

    @Put("/atualizar/:id")
    async atualizaUsuario(@Param("id") id:string,@Body() novosDados:AtualizaUsuarioDTO){
       return  this.usuarioRepository.atualizar(id,novosDados);
    }

    @Delete("/deletar/:id")
    async deletarUsuario(@Param("id") id:string){
       return await this.usuarioRepository.deletar(id);
    }   

    @Get("/buscar")
    async buscarUsuarios(){
        return this.usuarioRepository.listar();
    }
}