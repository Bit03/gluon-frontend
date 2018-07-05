import React, { Component } from 'react';
// import { Container, Row, Col, Span } from '../../base';
import { API } from '../../service';
import PerfectImg from '@components/PerfectImg';
import defaultImg from '@static/images/default-big-gray.png';
import ReactHighcharts from 'react-highcharts';
import { Loading, Heading, Text, Row, Col, Container, FlexBox, Base, Btn } from '@base-style';
import { 
    Charts,
    About,
    Founder,
    Agency,
    AboutInfo,
    Website,
    SocialAccount,
    Status,
    SocialLink,
    SocialName,
    StatusItem,
    ItemDesc,
    GithubItem,
    Wrapper,
    LoadingWrapper } from './styles';
import NewsItem from './NewsItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faFacebook, faLinkedin, faReddit, faSlack, faGitter, faTelegram, faMedium, faYoutube, faInstagram, faGooglePlus, faWikipediaW } from '@fortawesome/free-brands-svg-icons';

const SocialData = [
    {name: "Twitter", icon: faTwitter}, 
    {name: "Facebook", icon: faFacebook},
    {name: "Linkedin", icon: faLinkedin},
    {name: "Reddit", icon: faReddit},
    {name: "Slack", icon: faSlack},
    {name: "Gitter", icon: faGitter},
    {name: "Telegram", icon: faTelegram},
    {name: "Medium", icon: faMedium},
    {name: "Youtube", icon: faYoutube},
    {name: "Instagram", icon: faInstagram},
    {name: "GooglePlus", icon: faGooglePlus},
    {name: "WikipediaW", icon: faWikipediaW}
];

export default class DetailPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isloading: true,
            detailData: null,
            aboutNews: null,
            commitData: [],
            stateData: [],
            watchData: [],
            starData: [],
            forkData: [],
            noReflow: false
        }
    }
    async componentDidMount() {       
        let slug = this.props.match.params.slug;
        let detailData = await API.getDetailData(slug);
        let aboutNews = await API.getSearchData(detailData.name);
        let commitData = detailData["github.login"] ? await API.getCommitData(detailData["github.login"]) : [];
        let stateData = detailData["github.login"] ? await API.getStateData(detailData["github.login"]) : [];       
        if(stateData.length!==0) this.cleanStateData(stateData);
        commitData.map((item, index) => {
            commitData[index][0] = commitData[index][0] * 1000;

            return true;
        })
        commitData.reverse();
        // console.log(commitData)
        aboutNews = aboutNews.results.slice(0, 3);

        this.setState({
            detailData,
            aboutNews,
            commitData,
            stateData,
            isloading: false
        }, () => {
            this.setState({
                noReflow: true
            })
        })
        
    }
    cleanStateData = (data) => {
        let {watchData, starData, forkData} = this.state;
        data.map((item) => {
            let time = item[0] * 1000;
            watchData.push([time, item[1]]);
            starData.push([time, item[2]]);
            forkData.push([time, item[3]]);

            return true
        })
        // watchData.reverse();
        // starData.reverse();
        // forkData.reverse();

        this.setState({
            watchData,
            starData,
            forkData
        })
    }

    render(){
        let { detailData, isloading, aboutNews, commitData, stateData, watchData, starData, forkData, noReflow } = this.state;
        let baseUrl = "https://dapprank.com";
        let series = [];
        if(commitData.length !== 0) series.push({data: commitData, name: "commit"});
        if(watchData.length !== 0) series.push({data: watchData, name: "watch"});
        if(starData.length !== 0) series.push({data: starData, name: "star"});
        if(forkData.length !== 0) series.push({data: forkData, name: "fork"});

        return (
            isloading ? 
            <LoadingWrapper>
                <Loading/>
            </LoadingWrapper>
            :
            <Base>
            <Container padding="0 20px">
                <FlexBox justifyContent="flex-start" alignItems="flex-start" margin="20px 0">
                    <Wrapper width={70} height={70}>
                        <PerfectImg src={detailData["site.logo_url"] ? detailData["site.logo_url"] : defaultImg} defaultImg={defaultImg} alt="logo"/>
                    </Wrapper>
                    <Wrapper width={400} height={100} margin="0 0 0 20px">
                        <Heading.item>{detailData["name"]}</Heading.item>
                        <ItemDesc>{detailData["description_cn"] ? detailData["description_cn"] : detailData["description"] }</ItemDesc>
                    </Wrapper>
                    <Wrapper margin="0 40px 0 20px">
                        <GithubItem>
                            <Text.item padding="6px 0 6px 8px"><FontAwesomeIcon icon={faEye} color="#3b3b3b"/></Text.item>
                            <Text.item padding="6px 0 6px 4px">Watch</Text.item>
                            <Text.item padding="6px 6px 6px 8px">{detailData["github.watch"] ? detailData["github.watch"] : "-"}</Text.item>
                        </GithubItem>
                        <GithubItem>
                            <Text.item padding="6px 0 6px 8px"><FontAwesomeIcon icon={faStar} color="#3b3b3b"/></Text.item>
                            <Text.item padding="6px 0 6px 4px">Star</Text.item>
                            <Text.item padding="6px 6px 6px 8px">{detailData["github.star"] ? detailData["github.star"] : "-"}</Text.item>
                        </GithubItem>
                        <GithubItem>
                            <Text.item padding="6px 0 6px 8px">Fork</Text.item>
                            <Text.item padding="6px 6px 6px 8px">{detailData["github.fork"] ? detailData["github.fork"] : "-"}</Text.item>
                        </GithubItem>
                    </Wrapper>
                    {detailData["admin_url"] ? <Btn padding="10px 15px" border href={baseUrl + detailData["admin_url"]} alt="admin_edit_page" target="_blank">编辑页面</Btn> : null}
                </FlexBox>
                <Row margin="0 0 20px 0">
                    <Col width={8} padding="0 15px 0 0">
                        {
                            commitData.length !== 0 || stateData.length !== 0 ? <Charts>
                                <Heading.h2 size={24} bold padding="0 0 20px 0">Github 数据</Heading.h2>
                                <ReactHighcharts
                                    config={{
                                        title: {
                                            text: detailData.name
                                        },
                                        xAxis: {
                                            type: 'datetime',
                                            labels: {
                                                rotation: -50,
                                                align: 'right',
                                                formatter: function() {
                                                    let date = new Date(this.value);
                                                    let year = date.getFullYear();
                                                    let month = date.getMonth() + 1;
                                                    month = month > 9 ? month : "0" + month;
                                                    let date1 = date.getDate();
                                                    date1 = date1 > 9 ? date1 : "0" + date1;

                                                    return year + "-" + month + "-" + date1;
                                                }
                                            },
                                            tickInterval: 1                                        
                                        },
                                        credits:{
                                            enabled: false // 禁用版权信息
                                        },
                                        time: {
                                            useUTC: false
                                        },
                                        series,
                                    }}
                                    noReflow={noReflow}/>
                            </Charts> : null
                        }
                        {
                            detailData["description_cn"] ? <About>
                                <Heading.h2 size={24} bold padding="0 0 20px 0">关于</Heading.h2>
                                <Wrapper>
                                    <Text.detail>{detailData["description_cn"]}</Text.detail>
                                </Wrapper>
                            </About> : null
                        }
                        {
                            detailData["founder"] ? <Founder>
                                <Heading.h2 size={24} bold padding="0 0 20px 0">团队</Heading.h2>
                                <Wrapper>
                                    <Text.detail>{detailData["founder"]}</Text.detail>
                                </Wrapper>
                            </Founder> : null
                        }
                        {
                            detailData["vc"] ? <Agency>
                                <Heading.h2 size={24} bold padding="0 0 20px 0">投资机构</Heading.h2>
                                <Wrapper>
                                    <Text.detail>{detailData["vc"]}</Text.detail>
                                </Wrapper>
                            </Agency> : null
                        }
                        {
                            aboutNews.length !== 0 ? <AboutInfo>
                                <Heading.h2 size={24} bold padding="0 0 20px 0">相关新闻</Heading.h2>
                                {aboutNews.map((item) => <NewsItem key={item.slug} data={item}></NewsItem>)}
                            </AboutInfo> : null
                        }
                    </Col>
                    <Col width={4} padding="0 0 0 15px">
                        <FlexBox column>
                            <Website>
                                <SocialLink href={detailData["site.url"]?detailData["site.url"]:"#notfound"} disabled={!detailData["site.url"]} target="_blank">
                                    <FontAwesomeIcon icon={faLink} size="lg" color={detailData["site.url"]?"#0056ff":"#bababa"}/>
                                    <SocialName>
                                        网站 <br/>
                                    </SocialName>
                                </SocialLink>
                            </Website>
                            <SocialAccount>
                                <SocialLink href={detailData["github.html_url"]?detailData["github.html_url"]:"#notfound"} disabled={!detailData["github.html_url"]} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="lg" color={detailData["github.html_url"]?"#0056ff": "#bababa"}/>
                                    <SocialName>GitHub</SocialName>
                                </SocialLink>
                                { SocialData.map((item) => <SocialLink key={item.name} href={detailData[`social.${item.name.toLowerCase()}`]?detailData[`social.${item.name.toLowerCase()}`]:"#notfound"} disabled={!detailData[`social.${item.name.toLowerCase()}`]} target="_blank">
                                    <FontAwesomeIcon icon={item.icon} size="lg" color={detailData[`social.${item.name.toLowerCase()}`]?"#0056ff": "#bababa"}/>
                                    <SocialName>{item.name}</SocialName>
                                </SocialLink>)}
                            </SocialAccount>
                            <Status>
                                <StatusItem>
                                    <Text.item>Status</Text.item>
                                    <Text.item>{detailData["status"] ? detailData["status"] : "-"}</Text.item>
                                </StatusItem>
                                <StatusItem>
                                    <Text.item>ICO</Text.item>
                                    <Text.item>{detailData["ico_status"] ? detailData["ico_status"] : "-"}</Text.item>
                                </StatusItem>
                            </Status>
                        </FlexBox>
                    </Col>
                </Row>
            </Container>
        </Base>
        )
    }
}