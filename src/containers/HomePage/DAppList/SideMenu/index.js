import React, { Component } from 'react';
import { ItemList, Wrapper } from './styles';

export default class SideMenu extends Component{
    renderSideMenu = () => <Wrapper>
        { this.props.data.map((item, index) => <ItemList key={item.platform} onClick={this.props.changePlatform(item.platform)}>
            <a href={"#" + item.platform} style={this.props.platform === item.platform ? {color: "0056ff"} : null}>{item.platform}</a>
        </ItemList> ) }
    </Wrapper>

    render() {
        return this.renderSideMenu()
    }
}