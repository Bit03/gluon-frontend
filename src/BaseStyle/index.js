import { Base, Container, Row, Col, FlexBox } from './Layout';
import Text from './Text';
import Heading from './Heading';
import Btn from './Btn';
import styled, {keyframes} from 'styled-components';
const loading = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`;
const Loading = styled.div`
    width: 40px;
    height: 40px;
    color: transparent;
    min-height: .8rem;
    pointer-events: none;
    animation: ${loading} .5s infinite linear;
    border: 5px solid rgb(237,237,237);
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    display: block;
    z-index: 1;
`;

export {
    Base,
    Container,
    Row, 
    Col,
    Text,
    Heading,
    Loading,
    FlexBox,
    Btn
}