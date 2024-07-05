import { Schema, model } from "mongoose";
import { WordVector } from '~/type/models/WordVector';
const WordVectorSchema = new Schema<WordVector>({
    word: {type: String, required: true},
    vectorContent: {type: [Number], required: true}
})

export const WordVectorModel = model("WordVector", WordVectorSchema);