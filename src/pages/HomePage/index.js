import React, { Component } from 'react';
import HotDApp from '../../containers/HotDApp';
import DAppList from '../../containers/DAppList';
import { Container } from './styles';

export default class HomePage extends Component{
    render(){
        return (
            <Container>
                <HotDApp />
                <DAppList />
            </Container>
        )
    }
}