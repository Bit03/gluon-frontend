import styled from 'styled-components';

const Wrapper = styled.ul`
    flex: 1;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around; */
    display: block;
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
    display: inline-block;
    width: 280px;
    height: 162px;
    background: #FFFFFF;
    box-shadow: 0 7px 20px 1px #E6EAF2;
    border-radius: 8px;
    margin: 20px 20px 0 0;
    padding: 20px;
`;
const ImgBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.showSize ? "50px" : "70px"};
    height: ${props => props.showSize ? "50px" : "70px"};
    background: #bababa;
`;
const InfoBlock = styled.div`
    float: left;
    margin-left: ${props => props.showSize ? "60px" : "80px"};
`;
const ProjectName = styled.span`
    display: block;
    font-size: 22px;
    color: #4A4A4A;
`;
const ProjectDesc = styled.span`
    /* display: block; */
    margin-top: ${props => props.showSize ? "10px" : null};
    font-size: 14px;
    color: #4A4A4A;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.showSize ? 4 : 2};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export {
    ItemList,
    ItemCard,
    Wrapper,
    ImgBlock,
    InfoBlock,
    ProjectDesc,
    ProjectName
}