const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,  // user의 id만 있으면 user에 대한 모든 정보 가져올 수 있다.
        ref: 'User'
    },
    movieId: {
        type: String,
    },
    movieTitle: {
        type: String,
    },
    moviePost: {
        type: String,
    },
    movieRunTime: {
        type: Number,
    },
}, { timestamps: true }) // 생성된 시간 자동 처리



const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }