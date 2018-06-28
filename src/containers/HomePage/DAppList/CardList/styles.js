import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.ul`
    display: block;
`;
const ItemLink = styled(Link)`
    align-items: ${ p => p.isCard ? null : "center"};

    display: flex;
    overflow: hidden;
`;
const ItemWrapper = styled.li`
    width: ${ p => p.isCard ? "280px" : "880px"};   
    float: ${ p => p.isCard ? "left" : null};

    margin-left: 20px;
    margin-bottom: 40px;
    display: block;
    height: 160px;
    padding: 25px;
    border: 1px solid rgba(51,51,51,.05);
    border-radius: 8px;
    cursor: pointer;
    :hover{
        box-shadow: 0 7px 20px 1px #E6EAF2;
    }
    transition: box-shadow ease .5s;
`;
const ImageWrapper = styled.div`
    width: ${ p => p.isCard ? "50px" : "70px"};
    height: ${ p => p.isCard ? "50px" : "70px"};
`;
const InfoWrapper = styled.div`
    width: ${ p => p.isCard ? "170px" : "400px"};
    height: ${ p => p.isCard ? "110px" : "75px"};
    margin-left: ${ p => p.isCard ? "15px" : "20px"};
`;
const PriceWrapper = styled.div`
    width: 350px;
    height: 110px;
    margin-left: 90px;
`;
const PriceItem = styled.div`
    width: 150px;
    height: 55px;
    float: left;
    text-align: left;
`;
const ItemDesc = styled.span`
    width: 100%;
    margin-top: 6px;
    font-size: 14px;
    color: #4A4A4A;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.isCard ? 4 : 2};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export {
    Wrapper,
    ItemWrapper,
    ItemLink,
    ImageWrapper,
    InfoWrapper,
    PriceWrapper,
    PriceItem,
    ItemDesc
}