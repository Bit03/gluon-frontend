import styled from 'styled-components';

const Wrapper = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 120px;
    top: 0;
`;

const NavsItem = styled.li`
    padding: 5px 0;
    margin-left: 32px;
    a {
        opacity: ${ props => props.active ? 1 : 0.75 };

        color: #fff;
        font-size: 14px;
    }
`;

export {
    Wrapper,
    NavsItem
}