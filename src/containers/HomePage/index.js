import React, { Component } from 'react';
import HotDApp from './HotDApp';
import DAppList from './DAppList';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
`;

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