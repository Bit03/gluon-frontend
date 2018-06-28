import styled from 'styled-components';

const Base = styled.div`
    width: ${p => p.w ? p.w : "100%"};
    background-color: ${p => p.bgColor ? p.bgColor : null};
    background-image: ${p => p.bgImage ? p.bgImage : null};

    position: relative;
`;
const Container = styled.div`
    width: ${p => p.w ? p.w : "1170px"};
    background-color: ${p => p.bgColor ? p.bgColor : null};
    background-image: ${p => p.bgImage ? p.bgImage : null};

    margin: auto;
    padding: 0 15px;
`;
const Row = styled.div`
    width: 100%;
    margin: 0 -15px;
    ::before {
        display: table;
        content: " ";
    }
    ::after{
        display: table;
        content: " ";
        clear: both;
    }
`;
const Col = styled.div`
    width: ${p => p.w ? (p.w / 12) * 100 + '%' : '100%'};

    padding: 0 15px;
    float: left;
`;

export {
    Base,
    Container,
    Row,
    Col
}