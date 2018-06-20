import styled from 'styled-components';

const TopRank = styled.div`
    width: 100%;
    margin-top: 20px;
`;
const Title = styled.h1`
    font-size: 40px;
    color: #3B3B3B;
`;
const MiniTitle = styled.h2`
    font-size: 20px;
    color: #878787;
    span {
        color: #BABABA;
    }
`;
const Charts = styled.div`
    width: 100%;
    height: 600px;
    border: 1px solid #bababa;
    margin-top: 20px;
`;
const LeftSide = styled.div`
    width: 850px;
    height: 800px;
    border: 1px solid #bababa;
`;
const RightSide = styled.div`
    width: 330px;
    height: 800px;
    border: 1px solid #bababa;
`;

export {
    TopRank,
    Title,
    MiniTitle,
    Charts,
    LeftSide,
    RightSide
}