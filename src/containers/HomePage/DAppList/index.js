import React, { Component } from 'react';
import SideMenu from './SideMenu';
import CardList from './CardList';
import TopBar from './TopBar';

import { Row, Col, Title } from '../../../base';
import { Container, Line, LoadMore } from './styles';

import { API } from '../../../service';

export default class DAppList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sideMenuData: [{
                platform: "All"
            }],
            dappData: [],
            showCard: true,
            platform: "",
            isloading: true,
            next: ""
        }
    }
    async componentDidMount(){
        let sideData = await API.getDappPlatform();
        let listData = await API.getAllDappData();

        this.setState({
            sideMenuData: this.state.sideMenuData.concat(sideData.results),
            dappData: listData.results,
            next: listData.next,
            platform: "All",
            page: 1,
            isloading: false
        })
    }
    _changeShowCard = (value) => {
        return () => {
            this.setState({
                showCard: value
            })
        }
    }
    _changePlatform = (platform) => {
        return async () => {
            this.setState({
                isloading: true
            })
            await API.getDappByPlatform(platform, this.setData);
        }
    }
    loadMoreData = async() => {
        if(this.state.next){
            let originData = await fetch(this.state.next.replace(/http/, 'https'));
            let data = await originData.json();

            this.setState({
                dappData: this.state.dappData.concat(data.results),
                next: data.next
            })
        }
    }
    setData = (platform, data) => {
        this.setState({
            platform,
            dappData: data.results,
            page: 1,
            isloading: false,
            next: data.next
        })
    }
    render() {
        let { sideMenuData, dappData, showCard, platform } = this.state;

        return(
            <Container>
                <Line w={this.state.isloading ? "80%" : "100%"}/>
                <TopBar title="Blockchain" changeShowCard={this._changeShowCard} showCard={showCard}/>
                <Row height="27px">
                    <Title color="#bababa" size="20px">platform</Title>
                </Row>
                <Row alignItems="flex-start">
                    <Col flex={1}>
                        <SideMenu data={sideMenuData} changePlatform={this._changePlatform} platform={platform}/>
                    </Col>
                    <Col flex={3}>
                        <CardList data={dappData} showCard={showCard}/>
                        { this.state.next ? <LoadMore onClick={this.loadMoreData}>加载更多...</LoadMore> : null}
                    </Col>
                </Row>
            </Container>
        )
    }
}