import React, { Component } from 'react';
import { Container, Content, Row, Span, Title } from '../../base';
import styled from 'styled-components';

const Info = styled.div`
    border-left: 1px solid #fff;
    padding-left: 27px;
    margin-left: 27px;
`

export default class Footer extends Component{
    render() {
        return <Container BgColor="#202020" width="100%">
            <Content>
                <Row height="94px" justifyContent="flex-start">
                    <Title bold>{this.props.title}</Title>
                    <Info>
                        <Span>DappRank 只专注于最真实数据排行，只专注于最真实数据排行。</Span>
                        <Span>2017-2018 All rights reserved</Span>
                    </Info>
                    <Span size="18px" left="250px">合作请洽 bd@blocks.tech</Span>
                </Row>
            </Content>
        </Container>
    }
}