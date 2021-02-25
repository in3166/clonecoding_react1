import React from 'react'
import { Descriptions, Badge } from 'antd';
import MovieDetail from '../MovieDetail';

function MovieInfo(props) {
    //let movie = props.movie;  same
    let { movie } = props; // 구조 분해 할당
    //console.log(movie)
    return (
        <div>
            <Descriptions title="영화 정보" bordered>
                <Descriptions.Item label="제목">{movie.original_title}</Descriptions.Item>
                <Descriptions.Item label="개봉일">{movie.release_date}</Descriptions.Item>
                <Descriptions.Item label="수익">{movie.revenue}</Descriptions.Item>
                <Descriptions.Item label="Runtime">{movie.runtime}</Descriptions.Item>
                <Descriptions.Item label="별점">{movie.vote_average}</Descriptions.Item>
                <Descriptions.Item label="투표수">{movie.vote_count}</Descriptions.Item>
                <Descriptions.Item label="상태">{movie.status}</Descriptions.Item>
                <Descriptions.Item label="인기도">{movie.popularity}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default MovieInfo
