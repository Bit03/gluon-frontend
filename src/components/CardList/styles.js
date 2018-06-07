import styled from 'styled-components';

const Wrapper = styled.ul`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: ${props => props.column ? "column" : null};
`;
const ItemList = styled.li`
    display: block;
    flex: 1;
    height: 110px;
    background: #FFFFFF;
    padding: 20px;
    border-bottom: 1px solid #ededed;
`;
const ItemCard = styled.li`
    display: block;
    width: 280px;
    height: 162px;
    background: #FFFFFF;
    box-shadow: 0 7px 20px 1px #E6EAF2;
    border-radius: 8px;
    margin: 20px 0;
`;

export {
    ItemList,
    ItemCard,
    Wrapper
}