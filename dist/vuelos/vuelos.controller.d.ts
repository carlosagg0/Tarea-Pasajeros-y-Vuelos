import { VuelosService } from './vuelos.service';
import { VueloDTO } from './dto/vuelo.dto';
export declare class VuelosController {
    private readonly vueloServicio;
    constructor(vueloServicio: VuelosService);
    insertar(vueloDTO: VueloDTO): Promise<import("../common/Interfaces/vuelos.interface").IVuelo>;
    todos(): Promise<import("../common/Interfaces/vuelos.interface").IVuelo[]>;
    uno(id: string): Promise<import("../common/Interfaces/vuelos.interface").IVuelo>;
    actualizar(id: string, vueloDTO: VueloDTO): Promise<import("../common/Interfaces/vuelos.interface").IVuelo>;
    eliminar(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
