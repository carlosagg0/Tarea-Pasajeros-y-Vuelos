import { PasajerosService } from './pasajeros.service';
import { PasajeroDTO } from './dto/pasajero.dto';
export declare class PasajerosController {
    private readonly pasajeroServicio;
    constructor(pasajeroServicio: PasajerosService);
    insertar(pasajeroDTO: PasajeroDTO): Promise<import("../common/interfaces/pasajeros.interface").IPasajero>;
    todos(): Promise<import("../common/interfaces/pasajeros.interface").IPasajero[]>;
    uno(id: string): Promise<import("../common/interfaces/pasajeros.interface").IPasajero>;
    actualizar(id: string, pasajeroDTO: PasajeroDTO): Promise<import("../common/interfaces/pasajeros.interface").IPasajero>;
    eliminar(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
