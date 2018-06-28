import React from 'react';
import { Heading, Text } from '@base-style';
import { ItemWrapper, ItemLink, ImageWrapper, InfoWrapper, PriceWrapper, PriceItem, ItemDesc } from './styles';

const Item = function(props) {
    return (
        <ItemWrapper isCard={props.isCard}>
            <ItemLink
                isCard={props.isCard}
                target="_blank"
                to={{
                    pathname: "/detail/" + props.data.slug,
                    state: {
                        slug: props.data.slug,
                        login: props.data.github && props.data.github.login ? props.data.github.login : ""
                    }
                }}>
                <ImageWrapper isCard={props.isCard}>
                    <img src={props.img} alt="logo"/>
                </ImageWrapper>
                <InfoWrapper isCard={props.isCard}>
                    <Heading.h2 color="#3b3b3b">{props.data.name}</Heading.h2>
                    <ItemDesc isCard={props.isCard}>{props.data.description_cn ? props.data.description_cn : props.data.description }</ItemDesc>
                </InfoWrapper>
                {
                    props.isCard ? null : <PriceWrapper>
                        <PriceItem>
                            <Heading.h3 color="#3b3b3b" mbottom="5">销售价格</Heading.h3>
                            <Text size="20" color="#3b3b3b" bold>{props.data.price_usd ? '$ ' + props.data.price_usd : '-'}</Text>
                        </PriceItem>
                        <PriceItem>
                            <Heading.h3 color="#3b3b3b" mbottom="5">符号</Heading.h3>
                            <Text size="20" color="#3b3b3b" bold>{props.data.symbol ? props.data.symbol : '-'}</Text>
                        </PriceItem>
                        <PriceItem>
                            <Heading.h3 color="#3b3b3b" mbottom="5">时价</Heading.h3>
                            <Text size="20" color="#3b3b3b" bold>{props.data.sale_price_usd ? '$ ' + props.data.sale_price_usd : '-'}</Text>
                        </PriceItem>
                        <PriceItem>
                            <Heading.h3 color="#3b3b3b" mbottom="5">收益率</Heading.h3>
                            <Text size="20" color="#3b3b3b" bold>{props.data.usd_raised ? props.data.usd_raised + ' X' : '-'}</Text>
                        </PriceItem>
                    </PriceWrapper>
                }
            </ItemLink>
        </ItemWrapper>
    )
}

export default Item;