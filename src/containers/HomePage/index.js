import React, { Component } from 'react';
// import HotDApp from './HotDApp';
import DAppList from './DAppList';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    min-height: calc(100vh - 150px);
`;

export default class HomePage extends Component{
    render(){
        return (
            <Container>
                <DAppList />
            </Container>
        )
    }
}