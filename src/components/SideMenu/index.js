import React, { Component } from 'react';
import { ItemList, Wrapper } from './styles';

export default class SideMenu extends Component{
    renderSideMenu = () => <Wrapper>
        { this.props.sideMenuData.map((item, index) => <ItemList key={item.id}>
            <a href="/">{item.name}</a>
        </ItemList> ) }
    </Wrapper>
        
    render() {
        return this.renderSideMenu()
    }
}