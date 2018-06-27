import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HotBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 90px;
`;

const Item = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90px;
`;

const ItemNum = styled.span`
    font-size: 40px;
    color: #3B3B3B;
`;

const ItemIntro = styled.span`
    font-size: 20px;
    color: #BABABA;
`;

export {
    Wrapper,
    HotBottom,
    Item,
    ItemNum,
    ItemIntro
}