import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Button } from 'antd';
function Favorite(props) {

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTtile = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    let variables = {
        userFrom,  // userFrom: userFrom 과 동일
        movieId,
        movieTtile,
        moviePost,
        movieRunTime
    }

    useEffect(() => {
        // 영화의 좋아요 개수를 서버에 요청해서 받아오기, 누가눌렀고 어떤 영화인지 인자로 넘겨줌
        Axios.post('/api/favorite/favNumber', variables)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    setFavoriteNumber(res.data.favoriteNumber);
                } else {
                    alert("숫자 정보를 가져오는데 실패했습니다.");
                }
            })

        // 내가 좋아요한 영화인지 여부
        Axios.post('/api/favorite/favorited', variables)
            .then(res => {
                console.log(res.data)
                if (res.data.success) {
                    setFavorited(res.data.favorited);
                } else {
                    alert("정보를 가져오는데 실패했습니다.");
                }
            })


    }, [])


    const clickFavorite = () => {
        if (Favorited) {
            Axios.post('/api/favorite/removeFromFavorite', variables)
                .then(res => {
                    if (res.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1);
                        setFavorited(!Favorited);
                    } else {
                        alert("정보를 가져오는데 실패했습니다.");
                    }
                })
        } else {
            Axios.post('/api/favorite/addToFavorite', variables)
                .then(res => {
                    if (res.data.success) {
                        // 서버에서 좋아요 추가가 완료되면 
                        setFavoriteNumber(FavoriteNumber + 1);
                        setFavorited(!Favorited);
                    } else {
                        alert("정보를 가져오는데 실패했습니다.");
                    }
                })
        }
    }


    return (
        <div>
            <Button onClick={clickFavorite}>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}</Button>
        </div>
    )
}

export default Favorite
