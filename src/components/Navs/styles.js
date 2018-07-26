import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.ul`
    position: absolute;
    top: 50%;
    left: 160px;
    transform: translateY(-50%);
`;

const NavsItem = styled.li`
    display: inline-block;
    padding: 5px 5px;
    margin-left: 10px;
    a {
        opacity: ${ props => props.active ? 1 : 0.75 };
        color: #fff;
        font-size: 14px;
    }
`;

const ItemLink = styled(Link)`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export {
    Wrapper,
    NavsItem,
    ItemLink
}