import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsEmpty, IsNegative, IsNumber, MaxLength, Min, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./caracteristica.produto";
import { ImagemProdutoDTO } from "./imagem.produto";

export class CriaProdutoDTO {
    @IsEmpty({message:"Produto não pode ser vazio"})
    nome: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    valor: number;

    @IsNumber()
    @Min(0,{message:"O valor precisa ser maior que zero"})
    quantidade: number;
    
    @IsEmpty()
    @MaxLength(1000,{message:"Não pode ter mais que 1000 caracteres."})
    descricao: string;

    @ValidateNested()
    @IsArray()
    @Type(()=>CaracteristicaProdutoDTO)
    @ArrayMinSize(3)
    caracteristicas: CaracteristicaProdutoDTO[];
    
    @ValidateNested()
    @IsArray()
    @Type(()=>ImagemProdutoDTO)
    @ArrayMinSize(1)
    imagens: ImagemProdutoDTO[];
    
    @IsEmpty({message:"Categoria não pode ser vazia"})
    categoria: string;
  }