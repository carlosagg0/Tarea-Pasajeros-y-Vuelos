import { Injectable, HttpStatus } from '@nestjs/common';
import { PasajeroDTO } from './dto/pasajero.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PASAJERO } from '../common/models/models';
import { IPasajero } from 'src/common/interfaces/pasajeros.interface';

@Injectable()
export class PasajerosService {
    constructor(
        @InjectModel(PASAJERO.name) private readonly modelo: Model<IPasajero>,
      ) {}
    
      async insertar(pasajeroDTO: PasajeroDTO): Promise<IPasajero> {
        const newpasajero = new this.modelo({...pasajeroDTO});
        return newpasajero.save();
      }
      async todos(): Promise<IPasajero[]> {
        return await this.modelo.find();
      }
      async uno(id: string): Promise<IPasajero> {
        return await this.modelo.findById(id);
      }
      async actualizar(id: string, pasajeroDTO: PasajeroDTO): Promise<IPasajero> {
        const pasajero = new this.modelo({ pasajeroDTO});
        return await this.modelo.findByIdAndUpdate(id, pasajeroDTO, { new: true });
      }
    
      async eliminar(id: string) {
        await this.modelo.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Se eliminó correctamete' };
      }
}
