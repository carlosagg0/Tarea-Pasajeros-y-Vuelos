import { IsNotEmpty, IsDate, IsString } from "class-validator";

export class VueloDTO{

    @IsNotEmpty()
    @IsString()
    readonly piloto: string;
    @IsNotEmpty()
    @IsString()
    readonly avion: string;
    @IsNotEmpty()
    @IsString()
    readonly ciudadDestino: string;
    @IsNotEmpty()
    @IsString()
    readonly fechaVuelo: string;
}