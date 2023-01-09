import { Injectable} from "@nestjs/common";


/**
 * @description - Ações relacionadas á classe e controller usuário
 */
@Injectable()
export class UsuarioRepository{
    
    private Usuarios= [];


    async salvar(usuario){
        return this.Usuarios.push(usuario);
    }

    async listar(){
        return this.Usuarios;
    }

    async deletar(){

    };

    async atualizar(){
        
    }



}