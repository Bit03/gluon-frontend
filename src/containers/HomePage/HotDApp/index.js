import React, { Component } from 'react';

import Carousel from '../../../components/Carousel';

import {
    Wrapper,
    HotBottom,
    Item,
    ItemNum,
    ItemIntro,
    Line
} from './styles';

export default class HotApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [{
                id: "001",
                color: "#63E0D0"
            },{
                id: "002",
                color: "#249CFF"
            },{
                id: "003",
                color: "#8455D8"
            },{
                id: "004",
                color: "#63E0D0"
            }
            ,{
                id: "005",
                color: "#63E0D0"
            },{
                id: "006",
                color: "#63E0D0"
            },{
                id: "007",
                color: "lightblue"
            },{
                id: "008",
                color: "#249CFF"
            },{
                id: "009",
                color: "#8455D8"
            },{
                id: "010",
                color: "#63E0D0"
            }
            ,{
                id: "011",
                color: "#8455D8"
            }
            // ,{
            //     id: "012",
            //     color: "#63E0D0"
            // }
        ],
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
                <Carousel changeActiveIndex={this.changeActiveIndex} title="Hot DApps" carouselItems={this.state.carouselItems} activeIndex={this.state.activeIndex} />
                <HotBottom>
                    { this.state.hotData.map((item, index) => {
                        return <Item key={item.id}>
                            <ItemNum>{item.num}</ItemNum>
                            <ItemIntro>{item.intro}</ItemIntro>
                        </Item>
                    })}
                </HotBottom>
                <Line/>
            </Wrapper>
        )
    }
}