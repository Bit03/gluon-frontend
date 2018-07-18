import React, { Component } from 'react';

import Navs from '../Navs';
import SearchBar from '../SearchBar';

import { Container, Content, Row } from '../../base';
import { Text } from '@base-style'

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
        }
    }
    changeActiveIndex = (index) => {
        return () => {
            this.setState({
                activeIndex: index
            })
        }
    }
    render() {
        let navs = [{id: "001", name: "首页", url: "/"}, {id: "002", name: "排行榜", url: "/rank"}]

        return (
            <Container
                width="100%"
                BgImage="linear-gradient(90deg, #63E0D0 0%, #249CFF 100%, #8455D8 100%)">
                <Content height="66px">
                    <Row>
                        <Text color="#fff" size={22} bold>DApp Rank</Text>
                        <Navs
                            navItem={navs}
                            activeIndex={ this.state.activeIndex }
                            changeActiveIndex={ this.changeActiveIndex }/>
                        <SearchBar />
                    </Row>
                </Content>
            </Container>
        )
    }
}