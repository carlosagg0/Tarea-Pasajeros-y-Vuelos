import mongoose from "mongoose";

export const VueloSchema = new mongoose.Schema({
    piloto: {type: String, require: true},
    avion: {type: String, require: true},
    ciudadDestino: {type: String, require: true},
    fechaVuelo: {type: String, require: true},
},
{
    timestamps:true
}
);