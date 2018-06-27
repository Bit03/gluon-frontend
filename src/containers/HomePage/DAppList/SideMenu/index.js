import React, { Component } from 'react';
import { ItemList, Wrapper } from './styles';

export default class SideMenu extends Component{
    renderSideMenu = () => <Wrapper>
        { this.props.data.map((item, index) => <ItemList
            key={index}
            onClick={this.props.changePlatform(item.platform)}
            style={this.props.platform === item.platform ? {color: "#0056ff"} : null}>
            {item.platform}
        </ItemList> ) }
    </Wrapper>

    render() {
        return this.renderSideMenu()
    }
}