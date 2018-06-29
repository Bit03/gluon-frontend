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
`;

export {
    Wrapper,
    ItemList
}