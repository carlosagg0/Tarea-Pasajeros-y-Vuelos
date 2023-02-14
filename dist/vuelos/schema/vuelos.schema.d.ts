import mongoose from "mongoose";
export declare const VueloSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    piloto?: string;
    avion?: string;
    ciudadDestino?: string;
    fechaVuelo?: string;
}>;
