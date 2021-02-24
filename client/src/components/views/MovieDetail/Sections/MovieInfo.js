import React from 'react'
import { Descriptions, Badge } from 'antd';
import MovieDetail from '../MovieDetail';

function MovieInfo(props) {
    //let movie = props.movie;  same
    let { movie } = props; // 구조 분해 할당
    console.log("!!")
    console.log(movie)
    return (
        <div>
            <Descriptions title="Movie Info" bordered>
                <Descriptions.Item label="Title">{movie.original_title}</Descriptions.Item>
                <Descriptions.Item label="release_date">{movie.release_date}</Descriptions.Item>
                <Descriptions.Item label="revenue">{movie.revenue}</Descriptions.Item>
                <Descriptions.Item label="runtime">{movie.runtime}</Descriptions.Item>
                <Descriptions.Item label="vote_average">{movie.vote_average}</Descriptions.Item>
                <Descriptions.Item label="vote_count">{movie.vote_count}</Descriptions.Item>
                <Descriptions.Item label="status">{movie.status}</Descriptions.Item>
                <Descriptions.Item label="popularity">{movie.popularity}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default MovieInfo