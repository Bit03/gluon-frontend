import React, { Component } from 'react';
import SideMenu from './SideMenu';
import CardList from './CardList';
import TopBar from './TopBar';

import { Row, Col, Title } from '../../../base';
import { Container } from './styles';

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
            platform: ""
        }
    }
    async componentDidMount(){
        let sideData = await API.getDappPlatform();
        let listData = await API.getAllDappData();

        this.setState({
            sideMenuData: this.state.sideMenuData.concat(sideData.results),
            dappData: listData.results,
            platform: "All",
            page: 1,
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
            let listData = await API.getDappByPlatform(platform);

            this.setState({
                platform,
                dappData: listData.results,
                page: 1,
            })
        }
    }
    render() {
        let { sideMenuData, dappData, showCard, platform } = this.state;

        return(
            <Container>
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
                    </Col>
                </Row>
            </Container>
        )
    }
}