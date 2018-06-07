import React, { Component } from 'react';
import { Wrapper, TextInput } from './styles';

export default class SearchBar extends Component{
    render() {
        return (
            <Wrapper>
                <TextInput placeholder="搜索数字币、交易所"/>
            </Wrapper>            
        )
    }
}