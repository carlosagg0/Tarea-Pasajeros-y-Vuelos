"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VuelosModule = void 0;
const common_1 = require("@nestjs/common");
const vuelos_controller_1 = require("./vuelos.controller");
const vuelos_service_1 = require("./vuelos.service");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("../common/models/models");
const vuelos_schema_1 = require("./schema/vuelos.schema");
let VuelosModule = class VuelosModule {
};
VuelosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: models_1.VUELO.name,
                    useFactory: () => {
                        return vuelos_schema_1.VueloSchema;
                    }
                }
            ])
        ],
        controllers: [vuelos_controller_1.VuelosController],
        providers: [vuelos_service_1.VuelosService]
    })
], VuelosModule);
exports.VuelosModule = VuelosModule;
//# sourceMappingURL=vuelos.module.js.map