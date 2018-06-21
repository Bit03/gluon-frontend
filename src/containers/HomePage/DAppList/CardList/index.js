import React, { Component } from 'react';

import { ItemLink } from '../../../../base';
import { ItemList, ItemCard, Wrapper, ImgBlock, InfoBlock, ProjectDesc, ProjectName } from './styles';

export default class CardList extends Component{
    renderDAppList = () => {
        let {data, showCard} = this.props;
        let Item = showCard ? ItemCard : ItemList;

        return (
            <Wrapper column={!showCard}>
                { data.map((item, index) => <Item key={item.id}>
                    <ItemLink to={{
                        pathname: "/detail/" + item.slug,
                        state: {
                            slug: item.slug
                        }
                    }}>
                        <ImgBlock showSize={showCard}>
                            {/* { item.site.logo !== "" ? <img src={item.site.logo} alt="logo"/> : null} */}
                            <img src={require('../../../../static/images/default-big-gray.png')} alt="logo"/>
                        </ImgBlock>
                        <InfoBlock showSize={showCard}>
                            <ProjectName>{item.name}</ProjectName>
                            <ProjectDesc showSize={showCard}>{item.description_cn ? item.description_cn : item.description }</ProjectDesc>
                        </InfoBlock>
                    </ItemLink>
                </Item> )}
            </Wrapper>
        )
    }
        
    render() {
        return this.renderDAppList()
    }
}