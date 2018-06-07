import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const showup = keyframes`
  from {
    transform: translateY(162px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;
const Title = styled.h2`
    font-size: 40px;
    color: #3B3B3B;
    margin-top: 48px;
    margin-bottom: 26px;
`;
const CarouselWrapper = styled.ul`
    display: flex;
    flex: 4;
    align-items: center;
    justify-content: space-around;
    width: 1240px;
    height: 202px;
    margin-bottom: 11px;
    overflow-y: hidden;
    padding: 0 20px;
    box-sizing: border-box;
`;
const CarouselItem = styled.li`
    /* flex: 1; */
    box-sizing: border-box;
    background: ${props => props.color};
    animation: ${showup} 0.4s ease;
    animation-delay: ${props => props.time * 0.2 + 's'};
    animation-fill-mode: forwards;
    transform: translateY(162px);
    box-shadow: 0 7px 20px 1px #E6EAF2;
    border-radius: 8px;
    opacity: 0;
    width: 280px;
`;
const ItemLink = styled(Link)`
    display: block;
    width: 100%;
    height: 162px;
`;
const DotsWrapper = styled.div`
    display: flex;
    margin-bottom: 17px;
    :first-child {
        margin-left: 0;
    }
`;
const DotsItem = styled.div`
    width: 10px;
    height: 10px;
    background: ${props => props.active ? '#BABABA' : '#fff'};
    border: 2px solid #BABABA;
    border-radius: 50%;
    margin-left: ${props => props.left ? 0 : '29px'};
`;

export {
    Container,
    Title,
    CarouselWrapper,
    CarouselItem,
    ItemLink,
    DotsWrapper,
    DotsItem
}