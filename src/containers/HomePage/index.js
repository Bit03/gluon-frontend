import React, { Component } from 'react';
import HotDApp from './HotDApp';
import DAppList from './DAppList';
import { Container } from './styles';

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            dappData: []
        }
    }
    componentDidMounted() {
        
    }
    render(){
        return (
            <Container>
                <HotDApp />
                <DAppList />
            </Container>
        )
    }
}