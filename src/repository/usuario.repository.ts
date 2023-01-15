import { Injectable} from "@nestjs/common";
import { UsuarioGetAllDTO } from "src/dto/usuario/usuaria.getAll";
import { UsuarioEntity } from "src/entities/usuario.entity";


/**
 * @description - Ações relacionadas á classe e controller usuário
 */
@Injectable()
export class UsuarioRepository{
    
    private Usuarios:UsuarioEntity[]= [];

    private buscarPorId(id:string){
        return this.Usuarios.find(usuario=>usuario.id ===id);
    }

    async salvar(usuario:UsuarioEntity){
        this.Usuarios.push(usuario);
        return {user:new UsuarioGetAllDTO(usuario.nome,usuario.id)};
    }
    
    async listar(){
        return this.Usuarios.map((User:UsuarioEntity)=>{
           return{
                id: User.id,
                nome:User.nome
           }
        });
    }

    async deletar(id:string){
        const encontraUsuario= this.buscarPorId(id);
        this.Usuarios=this.Usuarios.filter(usuario=>usuario.id!==id);

        return {
            message:"Usuário excluído com sucesso"
        }
    };

    async atualizar(id:string,dadosAtualizados:Partial<UsuarioEntity>){
        const encontraUsuario= this.buscarPorId(id);

        // usuario não encontrado
        if(!encontraUsuario){
            throw new Error("Usuário não existe");
        }

        Object.entries(dadosAtualizados).forEach(([chave,valor])=>{
            if(chave==="id") return;

            encontraUsuario[chave]=valor;

        })

        return{
            message:"Usuário atualizado com"
        };
    }

    async getUserByEmail(email:string):Promise<boolean>{
        const findUser=  this.Usuarios.find(user=> user?.email ===email)
        return findUser !=undefined;
    }



}