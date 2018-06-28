import React, { Component } from 'react';

import { Wrapper } from './styles';
import Item from './Item';

export default class CardList extends Component{

    renderItem = () => {
        let { data, isCard } = this.props;
        let defaultImg = require('@static/images/default-big-gray.png');

        return data.map((item, index) => {
            let img = item.site && item.site.logo_url ? item.site.logo_url : defaultImg;

            return <Item key={index} data={item} isCard={isCard} img={img}/>
        })
    }

    render() {
        return (
            <Wrapper>
                { this.renderItem() }
            </Wrapper>
        )
    }
}