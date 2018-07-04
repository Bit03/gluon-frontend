import React, { Component } from 'react';
import SideMenu from './SideMenu';
import CardList from './CardList';
import TopBar from './TopBar';

import { Row, Col } from '../../../base';
import { Container, Line } from './styles';
import { API } from '../../../service';
import Pagination from '@components/Pagination';
import { Loading } from '@base-style';

export default class DAppList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sideMenuData: [{
                platform: "All"
            }],
            dappData: [],
            isCard: null,
            platform: "All",
            isloading: true,
            // next: "",
            currentPage: 1,
            pageSize: 21,
            totalPage: null
        }
    }
    async componentDidMount(){
        this.init();
    }
    init = () => {
        this.setPlatform();
        this.setDappData("All");
        let CardStatus = localStorage.getItem("CardStatus");

        this.setState({
            isCard: CardStatus ? JSON.parse(CardStatus).isCard : true
        })
    }
    setDappData = async( platform ) => {
        this.setState({
            isloading: true,
            totalPage: null,
            currentPage: 1,
            platform
        })
        let originData = await API.getDappByPlatform(platform);
        this.setCoinPrice(originData);

        this.setState({
            dappData: originData.results,
            // next: originData.next,
            totalPage: originData.count % 21 === 0 ? Math.floor(originData.count / 21) : Math.floor(originData.count / 21) + 1,
            isloading: false
        })
    }
    setCoinPrice = async( originData ) => {
        let symbols = [];
        originData.results.map((item, index) => {
            let param = 'symbols[' + index + ']=' + item.symbol;
            symbols.push(param);
            return true;
        })
        let priceData = await API.getPriceData(symbols.join('&'));
        originData.results.map((item) => {
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
    }
    setPlatform = async() => {
        let sideData = await API.getDappPlatform();
        this.setState({
            sideMenuData: this.state.sideMenuData.concat(sideData.results)
        })
    }
    _changeShowCard = (value) => {
        return () => {
            localStorage.setItem('CardStatus', JSON.stringify({isCard: value}));
            this.setState({
                isCard: value
            })
        }
    }
    _changePlatform = (platform) => {
        return async () => {
            // this.setState({
            //     isloading: true
            // })
            this.setDappData(platform)
        }
    }
    _changePage = ( kind, num ) => {
        let currentPage;
        let { platform } = this.state;
        if(kind === "jump"){
            currentPage = num;
        }else if(kind === "prev"){
            currentPage = this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;
        }else if(kind === "next"){
            currentPage = this.state.currentPage === this.state.totalPage ? this.state.totalPage : this.state.currentPage + 1;
        }else if(kind === "prevFive"){
            currentPage = this.state.currentPage - 5 >= 1 ? this.state.currentPage - 5 : 1;
        }else if(kind === "nextFive"){
            currentPage = this.state.currentPage + 5 >= this.state.totalPage ? this.state.totalPage : this.state.currentPage + 5;
        }
        return async() => {
            console.log(currentPage)
            if(this.state.isloading) return
            this.setState({
                isloading: true,
                currentPage
            })
            let originData = await API.getPageData(platform, currentPage);
            this.setCoinPrice(originData);
            this.setState({
                dappData: originData.results,
                isloading: false
            })
        }
    }

    render() {
        let { sideMenuData, dappData, isCard, platform, isloading, totalPage, currentPage } = this.state;

        return(
            <Container>
                <Line w={this.state.isloading ? "80%" : "100%"}/>
                <TopBar changeShowCard={this._changeShowCard} isCard={isCard}/>
                <Row alignItems="flex-start">
                    <Col flex={1}>
                        <SideMenu data={sideMenuData} changePlatform={this._changePlatform} platform={platform}/>
                    </Col>
                    { isloading ? <Col flex={3} direction="column"><Row height="200px" justifyContent="center" alignItems="center">
                        <Loading/>
                    </Row>
                    <Row justifyContent="center" height={40}>
                        { totalPage ? <Pagination totalPage={totalPage} currentPage={currentPage} changePage={this._changePage}/> : null}    
                    </Row></Col> : <Col flex={3} direction="column">
                        <CardList data={dappData} isCard={isCard}/>
                        <Row justifyContent="center" height={40}>
                            <Pagination totalPage={totalPage} currentPage={currentPage} changePage={this._changePage}/>
                        </Row>
                    </Col>}
                </Row>
            </Container>
        )
    }
}