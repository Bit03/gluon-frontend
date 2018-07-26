import styled from 'styled-components';

const Base = styled.div`
    width: ${p => p.width ? p.width + "px" : "100%"};
    background-color: ${p => p.bgColor ? p.bgColor : null};
    background-image: ${p => p.bgImage ? p.bgImage : null};

    position: relative;
`;
const Container = styled.div`
    width: ${p => p.width ? p.width + "px" : "1200px"};
    background-color: ${p => p.bgColor ? p.bgColor : null};
    background-image: ${p => p.bgImage ? p.bgImage : null};
    padding: ${props => props.padding ? props.padding : null};
    margin: ${props => props.margin ? props.margin : "0 auto"};
    position: relative;

    /* margin: 0 auto; */
    /* padding: 0 15px; */
`;
const Row = styled.div`
    /* margin: 0 -15px; */
    margin: ${props => props.margin ? props.margin : null};
    padding: ${props => props.padding ? props.padding : "0 -15px"};
    height: ${props => props.height ? props.height + "px" : null};
    ::after{
        display: block;
        content: " ";
        width: 0;
        height: 0;
        visibility: hidden;
        clear: both;
    }
`;
const Col = styled.div`
    width: ${p => p.width ? (p.width / 12) * 100 + '%' : '100%'};
    margin: ${props => props.margin ? props.margin : null};
    padding: ${props => props.padding ? props.padding : null};
    /* padding: 0 15px; */
    float: left;
`;
const FlexBox = styled.div`
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
    align-items: ${props => props.alignItems ? props.alignItems : "center"};
    flex-direction: ${props => props.row ? "row" : null};
    flex-direction: ${props => props.column ? "column" : null};
    width: ${props => props.width ? props.width + "px" : null};
    height: ${props => props.height ? props.height + "px" : null};
    margin: ${props => props.margin ? props.margin : null};
    background-color: ${p => p.bgColor ? p.bgColor : null};

    display: flex;
`;
export {
    Base,
    Container,
    Row,
    Col,
    FlexBox
}