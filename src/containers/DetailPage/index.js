import React, { Component } from 'react';
import { Container, Row, Col } from '../../base';
import { API } from '../../service';
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
        BlockEle } from './styles';

export default class DetailPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detailData: [],
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
            }]
        }
        this.aboutTop = 0;
        this.founderTop = 0;
        this.agencyTop = 0;
        this.githubDataTop = 0;
        this.aboutInfoTop = 0;
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let result = await API.getDappData(id);
        this.pageInit();

        console.log(result)
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

        return (
            <Container width="100%">
                <Wrapper>
                    <TopCharts></TopCharts>
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
                                <div style={{ height: '300px'}}></div>
                            </GithubData>
                            <AboutInfo id="aboutInfo">
                                <Title>相关新闻</Title>
                                <div style={{ height: '800px'}}></div>
                            </AboutInfo>
                        </Col>
                        <Col>
                            <RightSide id="rightSide" fixed={this.state.fixed} left={this.state.rightSide}>
                                <Website></Website>
                                <SocialAccount></SocialAccount>
                                <Status></Status>
                            </RightSide>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}