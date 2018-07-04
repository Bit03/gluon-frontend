import React, { Component } from 'react';
import { Wrapper } from './styles';
import { Text, Heading, FlexBox } from '@base-style';
const baseUrl = "https://www.chainnews.com";
const NewsItem = (props) => <Wrapper border padding="20px 0">
    <Heading.h2 margin="0 0 6px 0">
        <a href={ baseUrl + props.data.absolute_url} alt="news" target="_blank">{props.data.title}</a>
    </Heading.h2>
    <Text.detail>{props.data.digest}</Text.detail>
    <FlexBox height={40} justifyContent="flex-start" margin="10px 0 0 0">
        <img src={props.data.author_avatar_url} alt="author_avatar" width="24" height="24" style={{borderRadius: "50%"}}/>
        <Text margin="0 0 0 6px">
            <a href={ baseUrl + props.data.author_url} alt="news" target="_blank">{props.data.author_name}</a>
        </Text>
        <Text margin="0 0 0 10px">{props.data.pp_time}</Text>
    </FlexBox>
</Wrapper>

export default NewsItem;