import React, { Component } from 'react';
import { Wrapper, TextInput } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class SearchBar extends Component{
    render() {
        return (
            <Wrapper>
                <FontAwesomeIcon icon={faSearch} color="#fff" style={{opacity: 0.5, position: 'absolute', top: '10px', left: '10px'}}/>
                <TextInput placeholder="搜索数字币、交易所"/>
            </Wrapper>            
        )
    }
}