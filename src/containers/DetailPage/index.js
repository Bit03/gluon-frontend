import React, { Component } from 'react';
import { Container, Row, Col, Span } from '../../base';
import { API } from '../../service';
import ReactHighcharts from 'react-highcharts';
import { About,
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
        StatusItem,
        ChartsBorder,
        EditBtn } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class DetailPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detailData: null,
            activeTab: "about",
            fixed: false,
            rightSide: 0,
            navsData: [{
                id: "about",
                name: "关于",
            },{
                id: "founder",
                name: "团队",
            },{
                id: "agency",
                name: "投资机构",
            },{
                id: "githubData",
                name: "Github数据",
            },{
                id: "aboutInfo",
                name: "相关新闻",
            }],
            chartsData: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
            },{
                data: [29.9, 61.5, 106.4, 169.2, 144.0, 156.0, 135.6, 148.5, 286.4, 174.1, 395.6, 354.4]
            }],
            commitData: [],
            noReflow: false,
            name: ""
        }
        this.aboutTop = 0;
        this.founderTop = 0;
        this.agencyTop = 0;
        this.githubDataTop = 0;
        this.aboutInfoTop = 0;
        this.bodyHeight = 0;
    }
    async componentDidMount() {
        // let login = this.props.l;
        // console.log(this.props.match.params.slug)
        
        let slug = this.props.match.params.slug;
        let detailData = await API.getDetailData(slug);

        this.setState({
            detailData
        }, () => {
            this.pageInit();
        })
        
        // await fetch("https://api.dapprank.com/api/github/repos/ethereum/state/")
        // .then((res) => {
        //     return res.json()
        // })
        // .then((data) => {
        //     let watchData = [];
        //     let starData = [];
        //     let forkData = [];

        //     // (data) => {
        //         let utcData = []
        //         data.map((item) => {
        //             let time = item[0] * 1000;
        //             watchData.push([time, item[1]]);
        //             starData.push([time, item[2]]);
        //             forkData.push([time, item[3]]);
        //             return true;
        //         })
        //         utcData.reverse();
        //         console.log(utcData)
        //         this.setState({
        //             watchData,
        //             starData,
        //             forkData
        //         }, () => {
        //             this.setState({
        //                 noReflow: true
        //             })
        //             // this.pageInit();
        //         })
        //     // }
        // });
    }
    conmponentDidUnmount() {
        window.onresize = null;
        window.onscroll = null;
    }
    pageInit = () => {
        this.state.navsData.map((item, index) => {
            let top = document.getElementById(item.id).getBoundingClientRect().top + window.scrollY;
            this[item.id + "Top"] = top;

            return true;
        })
        this.judgeTab();
        this.judgeRightSide();

        window.onscroll = () => {
            this.judgeTab()
        }
        window.onresize = () => {
            this.judgeRightSide()
        }
    }
    judgeTab = () => {
        let Y = window.scrollY;
        let fixed = false;
        if(Y >= 535){
            fixed = true;
        }else{
            fixed = false;
        }
        let tab = "about";
        this.state.navsData.map((item, index) => {
            if(Y + 80 >= this[item.id + "Top"]){
                tab = item.id;
            }
            return true;
        })
        this.setState({
            activeTab: tab,
            fixed
        })
    }
    judgeRightSide = () => {
        let RectInfo = document.getElementById("tabs").getBoundingClientRect();
        let left = RectInfo.left + RectInfo.width + 20;
        this.setState({
            rightSide: left
        })
    }
    changeTab = (tabId) => {
        return () => {
            this.setState({
                activeTab: tabId
            })
            window.scrollTo({
                top: this[tabId + "Top"] - 70,
                behavior: "instant"
            })
        }
    }
    render(){
        let { detailData } = this.state;
        // console.log(detailData)
        // console.log(detailData.github.html_url)
        let github = detailData ? detailData.github.html_url : null;
        let twitter = detailData ? (detailData.social.twitter === "" ? null : detailData.social.twitter): null;
        let facebook = detailData ? (detailData.social.facebook === "" ? null : detailData.social.facebook): null;
        let linkedin = detailData ? (detailData.social.linkedin === "" ? null : detailData.social.linkedin): null;
        let site = detailData ? (detailData.site ? detailData.site.url : null) : null;
        let status = detailData ? detailData.status : null;
        let ico = detailData ? detailData.ico_status : null;
        let admin_url = detailData ? (detailData.admin_url ? detailData.admin_url : null) : null;
        let baseUrl = "https://dapprank.com";

        return (
            <Container width="100%">
                <Wrapper>
                    <TopCharts>
                        {/* <ReactHighcharts
                        neverReflow={this.state.noReflow}
                        config={{
                        title: {
                            text: this.state.name
                        },
                        xAxis: {
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                        },
                        series: this.state.chartsData,
                        chart: {
                            height: 440,
                            borderRadius: 20,
                        },
                        credits:{
                            enabled: false // 禁用版权信息
                        }
                        }}>
                        </ReactHighcharts> */}
                        {detailData ? "项目名称: " + detailData.name : null}
                        {admin_url ? <EditBtn href={baseUrl + admin_url} alt="admin_edit_page">编辑页面</EditBtn> : null}
                    </TopCharts>
                </Wrapper>
                <Container>
                    <Row flex={4} alignItems="flex-start" justifyContent="space-between">
                        <Col>
                            <Tabs id="tabs" fixed={this.state.fixed}>
                                {
                                    this.state.navsData.map((item, index) => {
                                        return <TabsItem
                                                key={item.id}
                                                active={item.id === this.state.activeTab}
                                                onClick={this.changeTab(item.id)}>{item.name}</TabsItem>
                                    })
                                }
                            </Tabs>
                            <BlockEle fixed={this.state.fixed}></BlockEle>        
                            <About id="about">
                                <Title>关于</Title>
                                <div style={{ height: '300px'}}></div>
                            </About>
                            <Founder id="founder">
                                <Title>团队</Title>
                                <div style={{ height: '300px'}}></div>
                            </Founder>
                            <Agency id="agency">
                                <Title>投资机构</Title>
                                <div style={{ height: '300px'}}></div>
                            </Agency>
                            <GithubData id="githubData">
                                <Title>Github数据</Title>
                                <ChartsBorder>
                                { this.state.commitData.length === 0 ? <ReactHighcharts
                                // isPureConfig={true}
                                ref="chart"
                                neverReflow={this.state.noReflow}
                                config={{
                                title: {
                                    text: this.state.name
                                },
                                xAxis: {
                                    type: 'datetime',
                                    labels: {
                                        rotation: -50,
                                        align: 'right',
                                        formatter: function() {
                                            return new Date(this.value).toLocaleDateString().replace(/\//g, '-');
                                        }
                                    }
                                },
                                series: [{
                                    data: this.state.watchData,
                                    name: "watch"
                                },{
                                    data: this.state.starData,
                                    name: "star"
                                },{
                                    data: this.state.forkData,
                                    name: "fork"
                                }],
                                credits:{
                                    enabled: false // 禁用版权信息
                                },
                                time: {
                                    useUTC: false
                                }
                                }}>
                                </ReactHighcharts> : <div>comming soon</div>}
                                </ChartsBorder>
                            </GithubData>
                            <AboutInfo id="aboutInfo">
                                <Title>相关新闻</Title>
                                <div style={{ height: '800px'}}></div>
                            </AboutInfo>
                        </Col>
                        <Col>
                            <RightSide id="rightSide" fixed={this.state.fixed} left={this.state.rightSide}>
                                <Website>
                                    <SocialLink href={site?site:"#notfound"} target="_blank">
                                        <FontAwesomeIcon icon={faLink} size="lg" color={site?"#0056ff":"#bababa"}/>
                                        <SocialName>
                                            网站 <br/>
                                        </SocialName>
                                    </SocialLink>
                                </Website>
                                <SocialAccount>
                                    <SocialLink href={github?github:"#notfound"} disabled={github} target="_blank">
                                        <FontAwesomeIcon icon={faGithub} size="lg" color={github?"#0056ff": "#bababa"}/>
                                        <SocialName>GitHub</SocialName>
                                    </SocialLink>
                                    <SocialLink href={twitter!==""?twitter:"#notfound"} target="_blank">
                                        <FontAwesomeIcon icon={faTwitter} size="lg" color={twitter?"#0056ff": "#bababa"}/>
                                        <SocialName>推特</SocialName>
                                    </SocialLink>
                                    <SocialLink href={facebook!==""?facebook:"#notfound"} target="_blank">
                                        <FontAwesomeIcon icon={faFacebook} size="lg" color={facebook?"#0056ff": "#bababa"}/>
                                        <SocialName>脸书</SocialName>
                                    </SocialLink>
                                    <SocialLink href={linkedin!==""?linkedin:"#notfound"} target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} size="lg" color={linkedin?"#0056ff": "#bababa"}/>
                                        <SocialName>领英</SocialName>
                                    </SocialLink>
                                </SocialAccount>
                                <Status>
                                    <StatusItem>
                                        <Span>Status</Span>
                                        <Span>{status ? status : "-"}</Span>
                                    </StatusItem>
                                    <StatusItem>
                                        <Span>ICO</Span>
                                        <Span>{ico ? ico : "-"}</Span>
                                    </StatusItem>
                                </Status>
                            </RightSide>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}