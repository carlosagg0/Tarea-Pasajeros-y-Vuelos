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
exports.PasajerosController = void 0;
const common_1 = require("@nestjs/common");
const pasajeros_service_1 = require("./pasajeros.service");
const pasajero_dto_1 = require("./dto/pasajero.dto");
let PasajerosController = class PasajerosController {
    constructor(pasajeroServicio) {
        this.pasajeroServicio = pasajeroServicio;
    }
    insertar(pasajeroDTO) {
        return this.pasajeroServicio.insertar(pasajeroDTO);
    }
    todos() {
        return this.pasajeroServicio.todos();
    }
    uno(id) {
        return this.pasajeroServicio.uno(id);
    }
    actualizar(id, pasajeroDTO) {
        return this.pasajeroServicio.actualizar(id, pasajeroDTO);
    }
    eliminar(id) {
        return this.pasajeroServicio.eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pasajero_dto_1.PasajeroDTO]),
    __metadata("design:returntype", void 0)
], PasajerosController.prototype, "insertar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PasajerosController.prototype, "todos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PasajerosController.prototype, "uno", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pasajero_dto_1.PasajeroDTO]),
    __metadata("design:returntype", void 0)
], PasajerosController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PasajerosController.prototype, "eliminar", null);
PasajerosController = __decorate([
    (0, common_1.Controller)('api/v1/pasajeros'),
    __metadata("design:paramtypes", [pasajeros_service_1.PasajerosService])
], PasajerosController);
exports.PasajerosController = PasajerosController;
//# sourceMappingURL=pasajeros.controller.js.map