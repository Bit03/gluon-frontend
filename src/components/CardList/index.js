import React, { Component } from 'react';

import { ItemLink } from '../../base';
import { ItemList, ItemCard, Wrapper } from './styles';

export default class CardList extends Component{
    renderDAppList = () => {
        let {dappData, showCard} = this.props;
        let Item = showCard ? ItemCard : ItemList;

        return (
            <Wrapper column={!showCard}>
                { dappData.map((item, index) => <Item key={item.id}>
                    <ItemLink to={{
                        pathname: "/detail/" + item.id,
                        state: {
                            id: item.id
                        }
                    }}/>
                </Item> )}
            </Wrapper>
        )
    }
        
    render() {
        return this.renderDAppList()
    }
}