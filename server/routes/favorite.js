const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

//=================================
//             Favorite
//=================================

router.post('/favNumber', (req, res) => {

    // db에서 좋아요 숫자 가져오기
    Favorite.find({ "movieId": req.body.movieId })
        .exec((err, info) => { // 쿼리를 돌려 db에서 정보 찾기
            if (err) return res.status(400).send(err);
            //info에 어떤 사람이 좋아했는지 [첫번째 사람, 2번째 , 3, 4, ...] 더미로 저장되어 있음
            res.status(200).json({ success: true, favoriteNumber: info.length });
        })
    // 프론트에 다시 숫자정보 보내주기
});


router.post('/favorited', (req, res) => {

    // 내가 영화를 fav 리스트에 넣었는지 어부, movieId/userFrom

    Favorite.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom })
        .exec((err, info) => { // 쿼리를 돌려 db에서 정보 찾기
            if (err) return res.status(400).send(err);
            // info: [...]
            let result = false; // 내가 아직 이영화를 리스트에 안넣음
            if (info.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, favorited: result });
        })
    // 프론트에 다시 숫자정보 보내주기
});

// 좋아요 클릭
router.post('/addToFavorite', (req, res) => {
    // favorite DB Model에 받은 정보 넣어주면 됨.
    // document instance 생성
    console.log(req.body)
    const favorite = new Favorite(req.body);
    favorite.save((err, doc) => {
        if (err) return res.sendStatus(400).send(err)
        return res.status(200).json({ success: true, doc })
    }); // favorite documenet에 정보 다 들어감
});

router.post('/removeFromFavorite', (req, res) => {

    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, doc })
        });
});


router.post('/getFavoriteMovie', (req, res) => {
    // 내가 좋아요한 영화 목록 가져오기
    // Favorite 모델의 find를 사용
    Favorite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, favorites })
        })

});


router.post('/removeFromFavorite', (req, res) => {
    // 내가 좋아요한 영화 목록 가져오기
    // Favorite 모델의 find를 사용
    Favorite.findOneAndDelete({ 'movieId': req.body.movieId, 'userFrom': req.body.userFrom })
        .exec((err, result) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, result })
        })

});

module.exports = router;
