import React from 'react';

const PerfectImg = (props) => {
    let { width, height, style, src, alt, defaultImg } = props;

    return (
        <img onError={e => e.target.src = defaultImg} src={src} width={width} height={height} style={style} alt={alt} />
    )
}

export default PerfectImg;