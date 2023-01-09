import { Controller, Post,Body,Get } from "@nestjs/common";
import { UsuarioRepository } from "src/repository/usuario.repository";


@Controller("/usuarios")
export class UsuarioController{
    
    
    /**
     * @description Construtor da classe;
     */
    constructor(private usuarioRepository:UsuarioRepository ){
        
    }
    
    
    
    /**
     * @params { Usuario } - { nome,email,telefone}
     * @description Cadastro de usuário
     * @returns HTTP.200 OK - HTTP.400 ERROR
     */    
    @Post("/cadastro")
    async  cadastro(@Body() usuario) {
        this.usuarioRepository.salvar(usuario)      
        return usuario;
    }


    @Get("/buscar")
    async buscarUsuarios(){
        return this.usuarioRepository.listar();
    }
}