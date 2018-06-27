import React, { Component } from 'react';

import { ItemLink } from '../../../../base';
import { ItemList, ItemCard, Wrapper, ImgBlock, InfoBlock, ProjectDesc, ProjectName } from './styles';

export default class CardList extends Component{
    renderDAppList = () => {
        let {data, showCard} = this.props;
        let Item = showCard ? ItemCard : ItemList;
        let defaultImg = require('../../../../static/images/default-big-gray.png');
        return (
            <Wrapper column={!showCard}>
                { data.map((item, index) => <Item key={index}>
                    <ItemLink to={{
                        pathname: "/detail/" + item.slug,
                        state: {
                            slug: item.slug,
                            login: item.github && item.github.login ? item.github.login : "hello"
                        }
                    }}>
                        <ImgBlock showSize={showCard}>
                            {/* { item.site.logo !== "" ? <img src={item.site.logo} alt="logo"/> : null} */}
                            <img src={item.site && item.site.logo_url ? item.site.logo_url : defaultImg} alt="logo"/>
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