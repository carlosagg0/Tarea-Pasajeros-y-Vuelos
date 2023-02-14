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
exports.VuelosController = void 0;
const common_1 = require("@nestjs/common");
const vuelos_service_1 = require("./vuelos.service");
const vuelo_dto_1 = require("./dto/vuelo.dto");
let VuelosController = class VuelosController {
    constructor(vueloServicio) {
        this.vueloServicio = vueloServicio;
    }
    insertar(vueloDTO) {
        return this.vueloServicio.insertar(vueloDTO);
    }
    todos() {
        return this.vueloServicio.todos();
    }
    uno(id) {
        return this.vueloServicio.uno(id);
    }
    actualizar(id, vueloDTO) {
        return this.vueloServicio.actualizar(id, vueloDTO);
    }
    eliminar(id) {
        return this.vueloServicio.eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vuelo_dto_1.VueloDTO]),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "insertar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "todos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "uno", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, vuelo_dto_1.VueloDTO]),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VuelosController.prototype, "eliminar", null);
VuelosController = __decorate([
    (0, common_1.Controller)('api/v1/vuelos'),
    __metadata("design:paramtypes", [vuelos_service_1.VuelosService])
], VuelosController);
exports.VuelosController = VuelosController;
//# sourceMappingURL=vuelos.controller.js.map