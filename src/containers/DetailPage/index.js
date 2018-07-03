import React, { Component } from 'react';
// import { Container, Row, Col, Span } from '../../base';
import { API } from '../../service';
// import ReactHighcharts from 'react-highcharts';
import { Loading, Heading, Text, Row, Col, Container, FlexBox, Base, Btn } from '@base-style';
import { About,
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
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
            aboutNews: null
        }
    }
    async componentDidMount() {       
        let slug = this.props.match.params.slug;
        let detailData = await API.getDetailData(slug);
        let aboutNews = await API.getSearchData(detailData.name);
        aboutNews = aboutNews.results.slice(0, 3);
        // console.log(aboutNews)

        this.setState({
            detailData,
            aboutNews,
            isloading: false
        })
        
    }
    render(){
        let { detailData, isloading, aboutNews } = this.state;
        let baseUrl = "https://dapprank.com";

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
                        <img src={detailData["site.logo_url"] ? detailData["site.logo_url"] : require('@static/images/default-big-gray.png')} alt="logo"/>
                    </Wrapper>
                    <Wrapper width={400} height={100} margin="0 0 0 20px">
                        <Heading.item>{detailData["name"]}</Heading.item>
                        <ItemDesc>{detailData["description_cn"] ? detailData["description_cn"] : detailData["description"] }</ItemDesc>
                    </Wrapper>
                    <Wrapper width={300} height={70} margin="0 40px 0 20px">
                        <GithubItem>
                            <Text.item>Watch</Text.item>
                            <Text.item>{detailData["github.watch"] ? detailData["github.watch"] : "-"}</Text.item>
                        </GithubItem>
                        <GithubItem>
                            <Text.item>Star</Text.item>
                            <Text.item>{detailData["github.star"] ? detailData["github.star"] : "-"}</Text.item>
                        </GithubItem>
                        <GithubItem>
                            <Text.item>Fork</Text.item>
                            <Text.item>{detailData["github.fork"] ? detailData["github.fork"] : "-"}</Text.item>
                        </GithubItem>
                    </Wrapper>
                    {detailData["admin_url"] ? <Btn padding="10px 15px" border href={baseUrl + detailData["admin_url"]} alt="admin_edit_page">编辑页面</Btn> : null}
                </FlexBox>
                <Row margin="0 0 20px 0">
                    <Col width={8} padding="0 15px 0 0">    
                        <About>
                            <Heading.h2 size={24} bold>关于</Heading.h2>
                            <Wrapper></Wrapper>
                        </About>
                        <Founder>
                            <Heading.h2 size={24} bold>团队</Heading.h2>
                            <Wrapper></Wrapper>
                        </Founder>
                        <Agency>
                            <Heading.h2 size={24} bold>投资机构</Heading.h2>
                            <Wrapper></Wrapper>
                        </Agency>
                        <AboutInfo>
                            <Heading.h2 size={24} bold>相关新闻</Heading.h2>
                            {/* <FlexBox column> */}
                                { aboutNews.map((item) => <FlexBox key={item.slug} margin="20px 0 0 0" justifyContent="space-between">
                                    <Wrapper width={450} height={130}>
                                        <Heading.digest size={24} bold margin="0 0 20px 0">{item.title}</Heading.digest>
                                        <Text.digest>{item.digest}</Text.digest>
                                        <Wrapper height={40} margin="10px 0 0 0">
                                            <FlexBox justifyContent="flex-start">
                                                <img src={item.author_avatar_url} alt="avatar" width="26" height="26"/>
                                                <Text>{item.author_name}</Text>
                                                <Text>{item.pp_time}</Text>
                                                { item.tag_list.map((item) => <Text key={item.id}>
                                                    {item.name}
                                                </Text>)}
                                            </FlexBox>
                                        </Wrapper>
                                    </Wrapper>
                                    <Wrapper width={240} height={130}>
                                        <img src={item.cover_url} alt="cover"/>
                                    </Wrapper>
                                </FlexBox>)}
                            {/* </FlexBox> */}
                        </AboutInfo>
                    </Col>
                    <Col width={4} padding="0 0 0 15px">
                        <FlexBox column>
                            <Website>
                                <SocialLink href={detailData["site.url"]?detailData["site.url"]:"#notfound"} target="_blank">
                                    <FontAwesomeIcon icon={faLink} size="lg" color={detailData["site.url"]?"#0056ff":"#bababa"}/>
                                    <SocialName>
                                        网站 <br/>
                                    </SocialName>
                                </SocialLink>
                            </Website>
                            <SocialAccount>
                                <SocialLink href={detailData["github.html_url"]?detailData["github.html_url"]:"#notfound"} disabled={detailData["github.html_url"]} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size="lg" color={detailData["github.html_url"]?"#0056ff": "#bababa"}/>
                                    <SocialName>GitHub</SocialName>
                                </SocialLink>
                                { SocialData.map((item) => <SocialLink key={item.name} href={detailData[`social.${item.name.toLowerCase()}`]?detailData[`social.${item.name.toLowerCase()}`]:"#notfound"} disabled={detailData[`social.${item.name.toLowerCase()}`]} target="_blank">
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