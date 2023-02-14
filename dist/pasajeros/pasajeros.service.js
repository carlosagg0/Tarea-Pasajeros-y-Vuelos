"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasajerosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const models_1 = require("../common/models/models");
let PasajerosService = class PasajerosService {
    constructor(modelo) {
        this.modelo = modelo;
    }
    async insertar(pasajeroDTO) {
        const newpasajero = new this.modelo(Object.assign({}, pasajeroDTO));
        return newpasajero.save();
    }
    async todos() {
        return await this.modelo.find();
    }
    async uno(id) {
        return await this.modelo.findById(id);
    }
    async actualizar(id, pasajeroDTO) {
        const pasajero = new this.modelo({ pasajeroDTO });
        return await this.modelo.findByIdAndUpdate(id, pasajeroDTO, { new: true });
    }
    async eliminar(id) {
        await this.modelo.findByIdAndDelete(id);
        return { status: common_1.HttpStatus.OK, msg: 'Se eliminó correctamete' };
    }
};
PasajerosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(models_1.PASAJERO.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PasajerosService);
exports.PasajerosService = PasajerosService;
//# sourceMappingURL=pasajeros.service.js.map