import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    min-height: 700px;
    height: calc(100vh - 160px);
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        margin-bottom: 24px;
        :first-child {
            margin-top: 116px;
        }
    }
`;
const BackButton = styled.div`
    width: 80px;
    height: 36px;
    display: flex;
    background-color: #3B3B3B;
    border-radius: 1px;
    margin: 24px 0;
    a {
        color: #fff;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
    }
`;
const Quote = styled.div`
    font-size: 76px;
    height: 34px;
    color: #545454;
    opacity: 0.1;
    font-family: PingFangSC-Medium;
    margin-bottom: 24px;
`;
const SayingQuote = styled.div`
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 14px;
    color: #545454;
    text-align: center;
`;

export {
    Wrapper,
    BackButton,
    Quote,
    SayingQuote
}