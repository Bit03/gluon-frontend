import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 4;
    max-width: 1200px;
    min-height: calc(100vh - 250px);
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 50px;
`;
const Line = styled.div`
    width: ${props => props.w ? props.w : 0 };
    height: 1px;
    background-color: #ededed;
    transition: all linear 0.4s;
    margin: 0 auto;
`;

export {
    Container,
    Line
}