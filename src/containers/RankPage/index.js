import React, { Component } from 'react';
import { Container, Content, Row } from '../../base';
import {
    TopRank,
    Title,
    MiniTitle,
    Charts,
    LeftSide,
    RightSide
} from './styles';

export default class RankPage extends Component{
    render(){
        return (
            <Container>
                <Content>
                    <TopRank>
                        <Title>代码排行榜</Title>
                        <MiniTitle>Github数据由官方数据流最权威显示，以及最热项目的呈现。<span>截止北京时间每周一晚 8 ：00</span></MiniTitle>
                        <Charts></Charts>
                    </TopRank>
                    <Row alignItems="flex-start" style={{margin: "20px 0"}}>
                        <LeftSide></LeftSide>
                        <RightSide></RightSide>
                    </Row>
                </Content>
            </Container>
        )
    }
}