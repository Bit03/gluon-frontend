import styled from 'styled-components';

const Wrapper = styled.ul`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    top: 20px;
    left: 50px;
    ::before {
        content: '';
        display: block;
        height: 90%;
        width: 1px;
        position: absolute;
        top: 50%;
        right: 50px;
        background: #ededed;
        transform: translateY(-50%);
    }
`;

const ItemList = styled.li`
    cursor: pointer;
    margin-bottom: 10px;
    transform: translateX(${p => p.active ? "-10px" : null});
    transition: all ease .5s;
    position: relative;
    ::before {
        content: " ";
        visibility: ${p => p.active ? "visible" : "hidden"};
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-width: 6px;
        border-style: solid;
        border-color: transparent transparent transparent #0056ff;
    }
`;

export {
    Wrapper,
    ItemList
}