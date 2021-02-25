import React, { useEffect, useState } from 'react'
import './Favorite.css';
import Axios from 'axios';
import { Button, Popover } from 'antd';
import { IMAGE_BASE_URL } from '../../Config';

function FavoritePage() {

    const [Favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavoriteMovie();

    }, [])

    const fetchFavoriteMovie = () => {
        Axios.post('/api/favorite/getFavoriteMovie', { userFrom: localStorage.getItem('userId') })
            .then(res => {
                if (res.data.success) {
                    //console.log(res.data)
                    setFavorites(res.data.favorites)
                } else {
                    alert('영화 정보 가져오기 실패');
                }
            })
    }

    const onClickDelete = (movieId, userFrom) => {
        const variables = {
            movieId,
            userFrom
        }
        Axios.post('/api/favorite/removeFromFavorite', variables)
            .then((res => {
                if (res.data.success) {
                    // 서버에서 지워진 영화목록을 실시간으로 화면에서 지우기
                    // 방법1: 지워진 id를 받아서 state에서 삭제
                    // 방법2: getFavoriteMovie Request를 다시 날려서 새로운 리스트를 가져오기
                    fetchFavoriteMovie();
                } else {
                    alert('리스트 지우기 실패');
                }
            }))
    }

    const renderCards = Favorites.map((favorite, index) => {

        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "no image"}
            </div>
        )

        return <tr key={index}>
            <Popover content={content} title={`${favorite.movieTitle}`}>
                <td>{favorite.movieTitle}</td>
            </Popover>
            <td>{favorite.movieRunTime} 분</td>
            <td><Button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}>Remove</Button></td>
        </tr>
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2>Favorite Movies</h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>런타임</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCards}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
