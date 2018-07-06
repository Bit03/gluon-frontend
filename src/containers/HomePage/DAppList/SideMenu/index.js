import React, { Component } from 'react';
import { ItemList, Wrapper } from './styles';
import { Text } from '@base-style';

export default class SideMenu extends Component{
    renderSideMenu = () => <Wrapper>
        { this.props.data.map((item, index) => <ItemList
            active={this.props.platform === item.platform}
            key={index}
            onClick={this.props.changePlatform(item.platform)}>
            <Text color={this.props.platform === item.platform ? "#0056ff" : null}>{item.platform}</Text>
        </ItemList> ) }
    </Wrapper>

    render() {
        return this.renderSideMenu()
    }
}