import React, { Component } from 'react';

import Navs from '../../components/Navs';
import SearchBar from '../../components/SearchBar';

import { Container, Content, Row, Title } from '../../base';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0
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
        const { title, navs } = this.props;
        return (
            <Container
                width="100%"
                BgImage="linear-gradient(90deg, #63E0D0 0%, #249CFF 100%, #8455D8 100%)">
                <Content height="66px">
                    <Row>
                        <Title>{ title }</Title>
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