"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasajeroSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PasajeroSchema = new mongoose_1.default.Schema({
    nombre: { type: String, require: true },
    email: { type: String, require: true },
}, {
    timestamps: true
});
exports.PasajeroSchema.index({ email: 1 }, { unique: true });
//# sourceMappingURL=pasajeros.schema.js.map