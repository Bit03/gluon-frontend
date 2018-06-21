import React, { Component } from 'react';
import { Container, Row, Span, ItemLink } from '../../base';
import { Wrapper, BackButton, Quote, SayingQuote } from './styles';

export class Error404Page extends Component{
    render(){
        return (
            <Container>
                <Wrapper>
                    <Span size="36px" color="#3b3b3b">:( 无法找到该页</Span>
                    <Span size="14px" color="#545454">很抱歉，我们无法找到你试图访问的页面。</Span>
                    <img width="200" height= "200" src={require("../../static/images/error404.png")} alt="error404"/>
                    <BackButton>
                        <ItemLink to="/">返回首页</ItemLink>
                    </BackButton>
                    <Quote>“</Quote>
                    <SayingQuote>
                    Buy on the rumor, sell on the news.
                    <br/>
                    有谣言买入，有新闻卖出。
                    </SayingQuote>
                    <Span size="14px" color="#bababa">- Wall Street Proverb</Span>
                </Wrapper>
            </Container>
        )
    }
}