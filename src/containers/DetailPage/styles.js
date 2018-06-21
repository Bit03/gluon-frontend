import styled from 'styled-components';

const Title = styled.h3`
    font-size: 28px;
    color: #4A4A4A;
    padding: 10px 0;
`;
const baseLeftSide = styled.div`
    width: 850px;
`;
const About = baseLeftSide.extend``;
const Founder = baseLeftSide.extend``;
const Agency = baseLeftSide.extend``;
const GithubData = baseLeftSide.extend``;
const AboutInfo = baseLeftSide.extend`
    /* position: ${props => props.fixed ? "fixed" : null};
    top: 20px; */
`;
const Wrapper = styled.div`
    height: 295px;
    background-image: linear-gradient(90deg, #63E0D0 0%, #249CFF 100%, #8455D8 100%);
    margin-bottom: 175px;
`;
const TopCharts = styled.div`
    width: 1200px;
    height: 450px;
    border: 1px solid #bababa;
    background: #fff;
    margin: 0 auto;
    position: relative;
    z-index: 10;
`;
const RightSide = styled.div`
    z-index: 10;
    width: 330px;
    position: ${props => props.fixed ? "fixed" : "absolute"};
    left: ${props => props.fixed ? props.left + "px" : "20px"};
    top: ${props => props.fixed ? 0 : 0};
`;
const borderBase = styled.div`
    width: 100%;
    margin-top: 20px;
    border: 1px solid rgba(137,138,151,0.15);
    border-radius: 3px;
    padding: 20px 0;
    padding-left: 34px;
`;
const Website = borderBase.extend`
`;
const SocialAccount = borderBase.extend`
`;
const SocialLink = styled.a`
    display: block;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    :last-child {
        margin-bottom: 0;
    }
`;
const SocialName = styled.span`
    display: block;
    font-size: 16px;
    color: #3B3B3B;
    margin-left: 20px;
`;
const Status = borderBase.extend`
    padding: 20px 34px;
`;
const Tabs = styled.ul`
    width: 850px;
    height: 70px;
    border-bottom: 1px solid rgba(137,138,151,0.15);
    position: ${props => props.fixed ? "fixed" : null};
    top: 0px;
    z-index: 1;
    background-color: #fff;
    display:flex;
    align-items: center;
`;
const TabsItem = styled.li`
    display: inline-block;
    margin-right: 100px;
    cursor: pointer;
    font-size: 20px;
    color: ${props => props.active ? "#3b3b3b" : "#878787"};
    position: relative;
    ::before {
        content: "";
        width: 10px;
        height: ${props => props.active ? "2px" : 0};
        background-color: #3b3b3b;
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
    }
    :last-child {
        margin-left: 0;
    }
`;
const BlockEle = styled.div`
    width: 850px;
    height: 70px;
    display: ${props => props.fixed ? "block" : "none"};
`;
const StatusItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 30px;
    span {
        flex: 1;
        text-align: left;
        font-size: 16px;
        color: #878787;
        :last-child{
            color: #3b3b3b;
        }
    }
`;
export { 
    About,
    Founder,
    Agency,
    GithubData,
    AboutInfo,
    Title,
    Wrapper,
    TopCharts,
    Website,
    SocialAccount,
    Status,
    Tabs,
    TabsItem,
    RightSide,
    BlockEle,
    SocialLink,
    SocialName,
    StatusItem }