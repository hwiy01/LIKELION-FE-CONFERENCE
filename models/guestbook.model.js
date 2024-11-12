import mongoose from "mongoose";

const guestbookSchema = new mongoose.Schema({
    author:{ type: String , required: true},
    message: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
})

// 앞의 인자로 각 모델들을 구분함
const GuestBook = mongoose.model('GuestBook', guestbookSchema);

export default GuestBook;