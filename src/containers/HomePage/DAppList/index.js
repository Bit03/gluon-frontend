import React, { Component } from 'react';
import SideMenu from './SideMenu';
import CardList from './CardList';
import TopBar from './TopBar';

import { Row, Col } from '../../../base';
import { Container, Line } from './styles';
import { API } from '../../../service';

export default class DAppList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sideMenuData: [{
                platform: "All"
            }],
            dappData: [],
            isCard: true,
            platform: "",
            isloading: true,
            next: ""
        }
    }
    async componentDidMount(){
        let sideData = await API.getDappPlatform();
        let listData = await API.getAllDappData();
        console.log(listData)
        let symbols = [];
        listData.results.map((item, index) => {
            let param = 'symbols[' + index + ']=' + item.symbol;
            symbols.push(param);
            return true;
        })
        let priceData = await API.getPriceData(symbols.join('&'));
        console.log(priceData)
        listData.results.map((item) => {
            priceData.data.map(priceItem => {
                if(priceItem.symbol === item.symbol){
                    item.price_usd = priceItem.attach.price_usd;
                    item.sale_price_usd = priceItem.attach.sale_price_usd;
                    item.usd_raised = priceItem.attach.usd_raised;
                }
                return true;
            })
            return true;
        })
        console.log(listData)
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
                isCard: value
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
        let { sideMenuData, dappData, isCard, platform } = this.state;

        return(
            <Container>
                <Line w={this.state.isloading ? "80%" : "100%"}/>
                <TopBar changeShowCard={this._changeShowCard} isCard={isCard}/>
                <Row alignItems="flex-start">
                    <Col flex={1}>
                        <SideMenu data={sideMenuData} changePlatform={this._changePlatform} platform={platform}/>
                    </Col>
                    <Col flex={3}>
                        <CardList data={dappData} isCard={isCard}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}