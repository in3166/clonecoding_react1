import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import Favorite from './Sections/Favorite';
import { Row } from 'antd';

function MovieDetail(props) {

    let movieId = props.match.params.movieId; // url 파라미터에서 id 정보 가져오기 (/movie/:movieId)
    const [Movie, setMovie] = useState([]);
    const [Casts, setCasts] = useState([]);
    const [ActorToggle, setActorToggle] = useState(false); // 출연지 숨김, 표시

    useEffect(() => {

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        //console.log(props.match)
        fetch(endpointInfo)
            .then(res => res.json())
            .then(res => {
                //console.log(res);
                setMovie(res);
            })

        fetch(endpointCrew)
            .then(res => res.json())
            .then(res => {
                //console.log(res.cast);
                setCasts(res.cast);
            })

    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle);
    }

    return (
        <div>
            {/* movie info */}
            <MainImage image={Movie.backdrop_path ? `${IMAGE_BASE_URL}w1280${Movie.backdrop_path}` : null}
                title={Movie.original_title}
                text={Movie.overview}
            />

            {/* body */}

            <div style={{ width: '85%', margin: '1rem auto' }}>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')}></Favorite>
                </div>

                {/* Movie Info */}
                <MovieInfo
                    movie={Movie}
                />

                <br />

                {/* actor grid */}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button onClick={toggleActorView}>Toggle Actor View</button>
                </div>

                {ActorToggle &&
                    <Row gutter={[16, 16]}>
                        {/* movie에 저장한 배열 하나씩 사용 map / image id 저장이유는 상세정보 열람시 사용 / key를 안넣으면 에러 */}
                        {Casts && Casts.map((cast, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    image={cast.profile_path ? `${IMAGE_BASE_URL}w500${cast.profile_path}` : `http://localhost:5000/uploads/default.jpg`}
                                    castName={cast.name}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                }

            </div>
        </div>
    )
}

export default MovieDetail
