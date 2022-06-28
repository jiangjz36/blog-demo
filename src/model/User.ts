import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
  username: String,
  password: String,
  avatar: String,
  description: String,
  token: String
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: String,
  description: {
    type: String,
    trim: true
  },
  token: String
})

export default model<IUser>('User', UserSchema)