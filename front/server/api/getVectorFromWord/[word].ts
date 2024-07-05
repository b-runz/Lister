import mongoose, { Schema, Document, Model } from 'mongoose';
import { WordVector } from '~/type/models/WordVector';
import { WordVectorModel } from '~/server/models/WordVector.model';

export default defineEventHandler
(async (event) => {

  const word = getRouterParam(event, 'word')
  const wv = await WordVectorModel.findOne({word: word})
  return wv
})