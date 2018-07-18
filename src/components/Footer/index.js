import React, { Component } from 'react';
import { Container, Content, Row, Span } from '../../base';
import styled from 'styled-components';
import { Text } from '@base-style'

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
                    <Text size={22} color="#fff" bold>{this.props.title}</Text>
                    <Info>
                        <Span>DappRank 只专注于最真实数据排行，只专注于最真实数据排行。</Span>
                        <Span>2017-2018 All rights reserved</Span>
                    </Info>
                    <Span size="18px" left="300px">合作请洽 bd@blocks.tech</Span>
                </Row>
            </Content>
        </Container>
    }
}