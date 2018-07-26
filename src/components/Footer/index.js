import React, { Component } from 'react';
import { Text, Container, FlexBox, Base } from '@base-style';
import { Bio } from './styles';

export default class Footer extends Component{
    render() {
        return (
            <Base bgColor="#202020" width="100%">
                <Container>
                    <FlexBox height={80}>
                        <Text.block size={22} color="#fff" bold>{this.props.title}</Text.block>
                        <Text.block size={18} color="#fff">合作请洽 bd@blocks.tech</Text.block>
                    </FlexBox>
                    <Bio>
                        <Text.block color="#fff">DappRank 只专注于最真实数据排行，只专注于最真实数据排行。</Text.block>
                        <Text.block color="#fff">2017-2018 All rights reserved</Text.block>
                    </Bio>
                </Container>
            </Base>
        )
    }
}