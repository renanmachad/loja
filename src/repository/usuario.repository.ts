import { Injectable} from "@nestjs/common";
import { UsuarioGetAllDTO } from "src/dto/usuario/usuaria.getAll";
import { UsuarioEntity } from "src/entities/usuario.entity";


/**
 * @description - Ações relacionadas á classe e controller usuário
 */
@Injectable()
export class UsuarioRepository{
    
    private Usuarios:UsuarioEntity[]= [];


    async salvar(usuario:UsuarioEntity){
        return this.Usuarios.push(usuario);
    }
    
    async listar(){
        return this.Usuarios.map((User:UsuarioEntity)=>{
            return new UsuarioGetAllDTO(
                User.id,
                User.nome
            )
        });
    }

    async deletar(){

    };

    async atualizar(){
        
    }

    async getUserByEmail(email:string):Promise<boolean>{
        const findUser=  this.Usuarios.find(user=> user?.email ===email)
        return findUser !=undefined;
    }



}