import styled from 'styled-components';

const borderBase = styled.div`
    width: 100%;
    margin-top: 20px;
    border: 1px solid rgba(137,138,151,0.15);
    border-radius: 3px;
    padding: 20px 0;
    padding-left: 34px;
    background-color: #fff;
`;
const leftSideBase = borderBase.extend`
    padding: 20px;
`;
const About = leftSideBase.extend``;
const Founder = leftSideBase.extend``;
const Agency = leftSideBase.extend``;
const GithubData = leftSideBase.extend``;
const AboutInfo = leftSideBase.extend`
    /* position: ${props => props.fixed ? "fixed" : null};
    top: 20px; */
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
    pointer-events: ${p => p.disabled ? "none" : null};
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

const ItemDesc = styled.span`
    width: 100%;
    margin-top: 6px;
    font-size: 14px;
    color: #4A4A4A;
    display: block;
`;
const Wrapper = styled.div`   
    width: ${p => p.width ? p.width + "px" : null};
    height: ${p => p.height ? p.height + "px" : null};
    margin: ${p => p.margin ? p.margin : null};
    padding: ${p => p.padding ? p.padding : null};
    border-bottom: ${p => p.border ? "1px solid #ededed" : null};
    overflow: hidden;
    ::after{
        display: block;
        content: " ";
        width: 0;
        height: 0;
        visibility: hidden;
        clear: both;
    }
    a{
        color: #3b3b3b;
        :hover{
            color: #0056ff;
        }
    }
`;
const GithubItem = styled.div`   
    width: 100px;
    height: 70px;
    float: left;
    span {
        height: 35px;
        text-align: center;
        font-size: 16px;
        color: #878787;
        :last-child{
            color: #3b3b3b;
        }
    }
`;
const LoadingWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 160px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export { 
    About,
    Founder,
    Agency,
    GithubData,
    AboutInfo,
    Website,
    SocialAccount,
    Status,
    SocialLink,
    SocialName,
    StatusItem,
    ItemDesc,
    Wrapper,
    GithubItem,
    LoadingWrapper }