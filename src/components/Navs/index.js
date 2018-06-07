import React, { Component } from 'react';

import { ItemLink } from '../../base';
import { Wrapper, NavsItem } from './styles';

export default class Navs extends Component{
    renderNavsItems = () => {
        const { navItem, activeIndex, changeActiveIndex } = this.props;

        return navItem.map((item, index) => {
            return (
                <NavsItem key={item.id} active={activeIndex === index}>
                    <ItemLink to={item.url} onClick={changeActiveIndex(index)}>{ item.name }</ItemLink>
                </NavsItem>
            )
        })
    }
    render() {
        return (
            <Wrapper>
                { this.renderNavsItems() }
            </Wrapper>
        )
    }
}