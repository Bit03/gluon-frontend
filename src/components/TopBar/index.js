import React, { Component } from 'react';

import { Title, BtnGroup, Btn } from './styles';
import { Row } from '../../base';

export default class TopBar extends Component{
    render() {
        return (
            <Row height="70px">
                <Title>{this.props.title}</Title>
                <BtnGroup>
                    <Btn onClick={this.props.changeShowCard(false)}>列表展示</Btn>
                    <Btn onClick={this.props.changeShowCard(true)}>卡片展示</Btn>
                </BtnGroup>
            </Row>
        )
    }
}