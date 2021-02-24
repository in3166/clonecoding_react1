
import React, { useEffect, useState, useRef } from 'react'
import { FaCode } from "react-icons/fa";
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function LandingPage() {

    const buttonRef = useRef(null);

    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    const [CurrentPage, setCurrentPage] = useState(0); // 페이지 load 되자마자 fetchMovies()가 실행되므로 현재페이지 1저장?

    // 하나의 함수로 추출
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint); // app이 로드되자마자 fetch
    }, [])

    // 스크롤 자동 loadmore
    useEffect(() => {
        // 스크롤 할때마다 계산해서 끝이면 load
        window.addEventListener("scroll", handleScroll);
    }, [])


    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                // setMovies([...response.results])  // 현재 가져온걸 덮어 씌움 [response.results] -> response.results / ...[response.resultes]
                setMovies([...Movies, ...res.results])
                setMainMovieImage(res.results[0])
                setCurrentPage(res.page)
                //console.log(response.results)
            })
    }

    // loadmore 버튼 onclick 함수 만들기
    const loadMoreItems = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);
    }

    // 스크롤 자동 loadmore
    const handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight - 1) {
            // loadMoreItems()
            console.log('clicked')
            buttonRef.current.click();
        }
    }


    return (
        <div style={{ width: '100%', margin: '0' }}>
            {}
            {/* 가장 유명한 이미지를 프로퍼티로 전달 */}
            { MainMovieImage &&
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />
            }
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>Movies by latest</h2>
                <hr />
                {/* gutter: 여백 */}
                <Row gutter={[16, 16]}>
                    {/* movie에 저장한 배열 하나씩 사용 map / image id 저장이유는 상세정보 열람시 사용 / key를 안넣으면 에러 */}
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>Load More</button>
            </div>
        </ div>

    )
}

export default LandingPage
