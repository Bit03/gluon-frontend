/* 
基于 styled-components 编写高度定制化的 样式组件
组件中的 Bootstrap
 */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    max-width: ${props => props.width ? props.width : '1200px'};
    background-color: ${props => props.BgColor ? props.BgColor : '#fff'};
    background-image: ${props => props.BgImage ? props.BgImage : '#fff'};

    padding: ${ props => props.padding ? props.padding : null };
    margin: 0 auto;
    position: relative;
`;

const Content = styled.div`
    max-width: ${props => props.width ? props.width : '1200px'};
    height: ${props => props.height ? props.height : null};
    
    margin: 0 auto;
    position: relative;
`;

const Row = styled.div`
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};
    height: ${props => props.height ? props.height : "100%"}

    display: flex;
`;

const Col = styled.div`
    flex: ${props => props.flex ? props.flex : 1};
    flex-direction: ${props => props.direction ? props.direction : null};
    position: relative;
`;

const Title = styled.h1`
    color: ${props => props.color ? props.color : '#fff'};;
    font-size: ${props => props.fontSize ? props.fontSize + 'px' : '22px'};
    font-weight: ${props => props.bold ? "bold" : null};
`;

const Span = styled.span`
    color: ${ props => props.color ? props.color : '#fff'};
    font-size: ${props => props.size ? props.size : '16px'};
    margin-left: ${props => props.left };

    display: block;
`;

const ItemLink = styled(Link)`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export {
    Container,
    Content,
    Row,
    Col,
    Title,
    Span,
    ItemLink
}