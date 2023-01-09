

export class UsuarioDTO{
    private email:string;
    private nome:string;
    private telefone:number;


    public setEmail(email:string){
        this.email=email;
    }

    public getEmail(email:string){
        return this.email;
    }
    
}