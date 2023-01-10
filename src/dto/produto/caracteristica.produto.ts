import { IsNotEmpty, IsString } from "class-validator";

export class CaracteristicaProdutoDTO {
    @IsString()
    @IsNotEmpty({message:"Nome da característica não pode ser vazia"})
    nome: string;

    @IsString()
    @IsNotEmpty({message:"Descrição da característica não pode ser vazia"})
    descricao: string;
}