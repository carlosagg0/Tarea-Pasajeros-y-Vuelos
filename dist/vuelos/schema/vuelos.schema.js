"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueloSchema = void 0;
const mongoose_1 = require("mongoose");
exports.VueloSchema = new mongoose_1.default.Schema({
    piloto: { type: String, require: true },
    avion: { type: String, require: true },
    ciudadDestino: { type: String, require: true },
    fechaVuelo: { type: String, require: true },
}, {
    timestamps: true
});
//# sourceMappingURL=vuelos.schema.js.map