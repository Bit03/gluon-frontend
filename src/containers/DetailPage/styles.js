import styled, { keyframes } from 'styled-components';

const Title = styled.h3`
    font-size: 28px;
    color: #4A4A4A;
    padding: 10px 0;
`;
const About = styled.div``;
const Founder = styled.div``;
const Agency = styled.div``;
const GithubData = styled.div``;
const AboutInfo = styled.div``;
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
const borderBase = styled.div`
    width: 330px;
    margin: 0 0 20px 20px;
    border: 1px solid rgba(137,138,151,0.15);
    border-radius: 3px;
`;
const Website = borderBase.extend`
    height: 81px;
`;
const SocialAccount = borderBase.extend`
    height: 212px;
`;
const Status = borderBase.extend`
    height: 105px;
`;
const Tabs = styled.ul`
    height: 50px;
    border-bottom: 1px solid rgba(137,138,151,0.15);
    position: ${props => props.fixed ? "fixed" : null};
    top: 20px;
    z-index: 100;
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
    TabsItem }