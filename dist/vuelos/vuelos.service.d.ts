import { HttpStatus } from '@nestjs/common';
import { VueloDTO } from './dto/vuelo.dto';
import { IVuelo } from 'src/common/Interfaces/vuelos.interface';
import { Model } from 'mongoose';
export declare class VuelosService {
    private readonly modelo;
    constructor(modelo: Model<IVuelo>);
    insertar(vueloDTO: VueloDTO): Promise<IVuelo>;
    todos(): Promise<IVuelo[]>;
    uno(id: string): Promise<IVuelo>;
    actualizar(id: string, vueloDTO: VueloDTO): Promise<IVuelo>;
    eliminar(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
