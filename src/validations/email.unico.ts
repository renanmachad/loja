import { Injectable } from "@nestjs/common/decorators";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioRepository } from "src/repository/usuario.repository";



@Injectable()
@ValidatorConstraint({name:"EmailUnique",async:true})
export class EmailUnique implements ValidatorConstraintInterface{
    
    constructor (private usuarioRepository:UsuarioRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const userExists= await this.usuarioRepository.getUserByEmail(value);

        return !userExists;
    }
    
    
    defaultMessage?(validationArguments?: ValidationArguments): string {
        throw new Error("Method not implemented.");
    }
    
} 


export const EmailUniqueValidation = (opcoes:ValidationOptions)=>{
    return (objeto:Object, propriedade:string)=>{
        registerDecorator({
            target:objeto.constructor,
            propertyName:propriedade,
            options:opcoes,
            constraints:[],
            validator:EmailUnique
        });
    }
}
