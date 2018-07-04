import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.ul`
    display: block;
    :after{
        content: "";
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
        clear: both;
    }
`;
const ItemLink = styled(Link)`
    align-items: ${ p => p.isCard ? null : "center" };

    display: flex;
    overflow: hidden;
`;
const ItemWrapper = styled.li`
    width: ${ p => p.isCard ? "280px" : "880px"};   
    float: ${ p => p.isCard ? "left" : null};
    padding: ${ p => p.isCard ? "24px" : "40px"};
    height: ${ p => p.isCard ? "162px" : "154px"};

    background: #fff;
    margin-left: 20px;
    margin-bottom: 24px;
    display: block;
    border: 1px solid rgba(51,51,51,.05);
    border-radius: 8px;
    cursor: pointer;
    :hover{
        box-shadow: 0 7px 20px 1px #E6EAF2;
    }
    transition: box-shadow ease .5s;
`;
const ImageWrapper = styled.div`
    width: ${ p => p.isCard ? "55px" : "75px" };
    height: ${ p => p.isCard ? "55px" : "75px" };
    border-radius: ${ p => p.isCard ? "4px" : "8px" };

    overflow: hidden;
`;
const InfoWrapper = styled.div`
    width: ${ p => p.isCard ? "155px" : "200px" };
    height: ${ p => p.isCard ? "110px" : "75px" };
    
    margin-left: 20px;
`;
const PriceWrapper = styled.div`
    width: 440px;
    margin-left: 63px;
`;
const PriceItem = styled.div`
    width: 110px;
    float: left;
    text-align: center;
`;
const ItemDesc = styled.span`
    width: 100%;
    margin-top: 6px;
    font-size: 14px;
    color: #4A4A4A;
    display: -webkit-box;
    -webkit-line-clamp: ${ props => props.isCard ? 4 : 2 };
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