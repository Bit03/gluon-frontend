import React, { Component } from 'react';

import {
    Wrapper,
    HotBottom
} from './styles';
import Item from '../DAppList/CardList/Item';

export default class HotApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            hotData: [{
                id: "001",
                num: 185,
                intro: "Dapps in the ether"
            },{
                id: "002",
                num: 1893,
                intro: "Social heat highest Dapps"
            },{
                id: "003",
                num: 73,
                intro: "Code update most Dapps"
            }]
        }
    }
    changeActiveIndex = (index) => {
        return () => {
            this.setState({
                activeIndex: index
            })
        }
    }
    render() {
        return (
            <Wrapper>
                <HotBottom>
                    { this.state.hotData.map((item, index) => <Item isCard={true} data={item}></Item>) }
                </HotBottom>
            </Wrapper>
        )
    }
}