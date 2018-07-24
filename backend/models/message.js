import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String
}, {collection: 'message'})

export default mongoose.model('Message', MessageSchema)