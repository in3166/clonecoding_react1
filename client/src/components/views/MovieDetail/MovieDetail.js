import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';

function MovieDetail(props) {

    let movieId = props.match.params.movieId; // url 파라미터에서 id 정보 가져오기 (/movie/:movieId)
    const [Movie, setMovie] = useState([]);
    useEffect(() => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        //console.log(props.match)
        fetch(endpointInfo)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setMovie(res);
            })

    }, [])

    return (
        <div>
            {/* movie info */}
            <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            />

            {/* body */}

            <div style={{ width: '85%', margin: '1rem auto' }}>

                {/* Movie Info */}
                <MovieInfo
                    movie={Movie}
                />

                <br />

                {/* actor grid */}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button>Toggle Actor View</button>

                </div>

            </div>
        </div>
    )
}

export default MovieDetail
