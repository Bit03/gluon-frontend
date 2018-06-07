import styled from 'styled-components';

const Wrapper = styled.ul`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    /* padding: 20px 0 0 50px; */
    top: 20px;
    left: 50px;
    ::before {
        content: '';
        display: block;
        height: 80%;
        width: 1px;
        position: absolute;
        top: 50%;
        right: 50px;
        background: #ededed;
        transform: translateY(-50%);
    }
`;

const ItemList = styled.li`
    a {
        font-size: 14px;
        line-height: 17px;
        color: #3B3B3B;
    }
`;

export {
    Wrapper,
    ItemList
}