import React from 'react'
import { Col } from 'antd';

function GridCards(props) {
    return (
        // 한 열의 최대 24
        <Col lg={6} md={8} sm={12} xs={24}>
            <div style={{ position: 'relative' }}>
                <a href={`/movie/${props.movieId}`}>
                    <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                </a>
            </div>
        </Col >
    )
}

export default GridCards
