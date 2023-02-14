import { HttpStatus } from '@nestjs/common';
import { PasajeroDTO } from './dto/pasajero.dto';
import { Model } from 'mongoose';
import { IPasajero } from 'src/common/interfaces/pasajeros.interface';
export declare class PasajerosService {
    private readonly modelo;
    constructor(modelo: Model<IPasajero>);
    insertar(pasajeroDTO: PasajeroDTO): Promise<IPasajero>;
    todos(): Promise<IPasajero[]>;
    uno(id: string): Promise<IPasajero>;
    actualizar(id: string, pasajeroDTO: PasajeroDTO): Promise<IPasajero>;
    eliminar(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
