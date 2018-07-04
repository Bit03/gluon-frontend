import React from 'react';
import { Heading, Text } from '@base-style';
import PerfectImg from '@components/PerfectImg';
import { ItemWrapper, ItemLink, ImageWrapper, InfoWrapper, PriceWrapper, PriceItem, ItemDesc } from './styles';
import defaultImg from '@static/images/default-big-gray.png';
const Item = function(props) {
    return (
        <ItemWrapper isCard={props.isCard}>
            <ItemLink
                isCard={props.isCard}
                target="_blank"
                to={{
                    pathname: "/detail/" + props.data.slug
                }}>
                <ImageWrapper isCard={props.isCard}>
                    {/* <img src={props.img} onError={(e) => e.target.src=defaultImg} alt="logo"/> */}
                    <PerfectImg src={props.img} defaultImg={defaultImg} alt="logo"/>
                </ImageWrapper>
                <InfoWrapper isCard={props.isCard}>
                    <Heading.item>{props.data.name}</Heading.item>
                    <ItemDesc isCard={props.isCard}>{props.data.description_cn ? props.data.description_cn : props.data.description }</ItemDesc>
                </InfoWrapper>
                {
                    props.isCard ? null : <PriceWrapper>
                        <PriceItem>
                            <Text.block mbottom="5">代币</Text.block>
                            <Text.item>{props.data.symbol ? props.data.symbol : '-'}</Text.item>
                        </PriceItem>
                        <PriceItem>
                            <Text.block mbottom="5">初始价</Text.block>
                            <Text.block size="20" color="#3b3b3b" bold>{props.data.price_usd ? '$ ' + props.data.price_usd.toFixed(4) : '-'}</Text.block>
                        </PriceItem>
                        <PriceItem>
                            <Text.block mbottom="5">销售价格</Text.block>
                            <Text.block size="20" color="#3b3b3b" bold>{props.data.sale_price_usd ? '$ ' + props.data.sale_price_usd.toFixed(4) : '-'}</Text.block>
                        </PriceItem>
                        <PriceItem>
                            <Text.block mbottom="5">回报率</Text.block>
                            <Text.block size="20" color="#3b3b3b" bold>{props.data.price_usd && props.data.sale_price_usd && props.data.price_usd !== 0 ?  (props.data.sale_price_usd/props.data.price_usd).toFixed(4) + ' X' : '-'}</Text.block>
                        </PriceItem>
                    </PriceWrapper>
                }
            </ItemLink>
        </ItemWrapper>
    )
}

export default Item;