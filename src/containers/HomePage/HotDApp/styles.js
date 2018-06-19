import styled from 'styled-components';
import { keyframes } from 'styled-components';

const lineWidthChange = keyframes`
  from {
    width: 0
  }

  to {
    width: 100%;
  }
`;
const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HotBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 90px;
`;

const Item = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90px;
`;

const ItemNum = styled.span`
    font-size: 40px;
    color: #3B3B3B;
`;

const ItemIntro = styled.span`
    font-size: 20px;
    color: #BABABA;
`;

const Line = styled.div`
    width: 0;
    height: 1px;
    background-color: #ededed;
    animation: ${lineWidthChange} 1.6s ease;
    animation-fill-mode: forwards;
    margin-top: 50px;
`;


export {
    Wrapper,
    HotBottom,
    Item,
    ItemNum,
    ItemIntro,
    Line
}