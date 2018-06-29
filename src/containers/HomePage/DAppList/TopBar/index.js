import React, { Component } from 'react';

import { BtnGroup, Btn } from './styles';
import { Row } from '../../../../base';
import { Heading } from '@base-style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

export default class TopBar extends Component{
    render() {
        return (
            <Row height="70px">
                <Heading.h3>区块链平台</Heading.h3>
                <BtnGroup>
                    <Btn>
                    <FontAwesomeIcon
                        icon={faThLarge}
                        size="lg"
                        color={this.props.isCard ? "#3b3b3b" : "#ededed"}
                        onClick={this.props.changeShowCard(true)}/>
                    </Btn>
                    <Btn>
                    <FontAwesomeIcon
                        icon={faAlignJustify}
                        size="lg"
                        color={this.props.isCard ? "#ededed" : "#3b3b3b"}
                        onClick={this.props.changeShowCard(false)}/>
                    </Btn>
                </BtnGroup>
            </Row>
        )
    }
}