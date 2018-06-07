import React, { Component } from 'react';
import SideMenu from '../../components/SideMenu';
import CardList from '../../components/CardList';
import TopBar from '../../components/TopBar';

import { Row, Col, Title } from '../../base';
import { Container } from './styles';

export default class DAppList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sideMenuData: [{
                id: "001",
                name: "bitcoin"
            },{
                id: "002",
                name: "bitcoin"
            },{
                id: "003",
                name: "bitcoin"
            },{
                id: "004",
                name: "bitcoin"
            },{
                id: "005",
                name: "bitcoin"
            },{
                id: "006",
                name: "bitcoin"
            },{
                id: "007",
                name: "bitcoin"
            },{
                id: "008",
                name: "bitcoin"
            },{
                id: "009",
                name: "bitcoin"
            },{
                id: "010",
                name: "bitcoin"
            },{
                id: "011",
                name: "bitcoin"
            },{
                id: "012",
                name: "bitcoin"
            },{
                id: "013",
                name: "bitcoin"
            },{
                id: "014",
                name: "bitcoin"
            },{
                id: "015",
                name: "bitcoin"
            },{
                id: "016",
                name: "bitcoin"
            },{
                id: "017",
                name: "bitcoin"
            },{
                id: "018",
                name: "bitcoin"
            },],
            dappData: [{
                id: "001323",
                name: "bitcoin"
            },{
                id: "001123",
                name: "bitcoin"
            },{
                id: "00123",
                name: "bitcoin"
            },{
                id: "023",
                name: "bitcoin"
            },{
                id: "00133",
                name: "bitcoin"
            },{
                id: "00132",
                name: "bitcoin"
            },{
                id: "00323",
                name: "bitcoin"
            },{
                id: "0323",
                name: "bitcoin"
            },{
                id: "0300",
                name: "bitcoin"
            }],
            showCard: true
        }
    }
    _changeShowCard = (value) => {
        return () => {
            console.log("hello")
            this.setState({
                showCard: value
            })
        }
    }
    render() {
        return(
            <Container>
                <TopBar title="Blockchain" changeShowCard={this._changeShowCard}/>
                <Row height="27px">
                    <Title color="#bababa" size="20px">platform</Title>
                </Row>
                <Row alignItems="flex-start">
                    <Col flex={1}>
                        <SideMenu sideMenuData={this.state.sideMenuData}/>
                    </Col>
                    <Col flex={3}>
                        <CardList dappData={this.state.dappData} showCard={this.state.showCard}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}