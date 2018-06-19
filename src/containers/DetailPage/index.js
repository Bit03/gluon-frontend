import React, { Component } from 'react';
import { Container, Row, Col } from '../../base';
import { API } from '../../service';
import { About, Founder, Agency, GithubData, AboutInfo, Title, Wrapper, TopCharts, Website, SocialAccount, Status, Tabs, TabsItem } from './styles';

export default class DetailPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            detailData: [],
            activeTab: "about",
            fixed: false
        }
        this.tabsRef = React.createRef();
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let result = await API.getDappData(id);

        const tabsEle = document.getElementById("tabs");
        document.addEventListener("scroll", () => {
            // console.log(tabsEle.offsetParent)
            console.log(window.scrollY)
            if(window.scrollY >= 515){
                this.setState({
                    fixed: true
                })
            }else{
                this.setState({
                    fixed: false
                })
            }
        })

        console.log(result)
    }
    changeTab = (tabId) => {
        return () => {
            this.setState({
                activeTab: tabId
            })
        }
    }
    render(){
        let navsData = [{
            id: "about",
            name: "关于"
        },{
            id: "founder",
            name: "团队"
        },{
            id: "agency",
            name: "投资机构"
        },{
            id: "github",
            name: "Github数据"
        },{
            id: "aboutInfo",
            name: "相关新闻"
        }];

        return (
            <Container width="100%">
                <Wrapper>
                    <TopCharts></TopCharts>
                </Wrapper>
                <Container>
                    <Row flex={4} alignItems="flex-start">
                        <Col flex={3}>
                            <Tabs id="tabs" ref={this.tabsRef} fixed={this.state.fixed}>
                                {
                                    navsData.map((item, index) => {
                                        return <TabsItem
                                                key={item.id}
                                                active={item.id === this.state.activeTab}
                                                onClick={this.changeTab(item.id)}>{item.name}</TabsItem>
                                    })
                                }
                            </Tabs>          
                            <About>
                                <Title>关于</Title>
                                <div style={{ height: '300px'}}></div>
                            </About>
                            <Founder>
                                <Title>团队</Title>
                                <div style={{ height: '300px'}}></div>
                            </Founder>
                            <Agency>
                                <Title>投资机构</Title>
                                <div style={{ height: '300px'}}></div>
                            </Agency>
                            <GithubData>
                                <Title>Github数据</Title>
                                <div style={{ height: '300px'}}></div>
                            </GithubData>
                            <AboutInfo>
                                <Title>相关新闻</Title>
                                <div style={{ height: '300px'}}></div>
                            </AboutInfo>
                        </Col>
                        <Col flex={1}>
                            <Website>
                                
                            </Website>
                            <SocialAccount></SocialAccount>
                            <Status></Status>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}