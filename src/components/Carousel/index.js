import React, { Component } from 'react';
import {
    Container,
    Title,
    CarouselWrapper,
    CarouselItem,
    ItemLink,
    DotsWrapper,
    DotsItem
} from './styles';

export default class Carousel extends Component{
    renderItems = () => {
        let { activeIndex, carouselItems } = this.props;
        let show = activeIndex * 4;
        return carouselItems.map((item, index) => {
            return (index >= show && index <= show + 3) ? <CarouselItem key={item.id} color={item.color} left={ index % 4 === 0 } time={index % 4 }><ItemLink to={{
                pathname: "/detail/" + item.id,
                state: {
                    id: item.id
                }
            }}/></CarouselItem> : null;
        })
    }
    renderDots = () => {
        return [1,2,3].map((item, index) => {
            return <DotsItem key={item} onClick={this.props.changeActiveIndex(index)} left={index === 0} active={this.props.activeIndex === index}/>
        })
    }
    render() {
        const { title } = this.props;
        return (
            <Container>
                <Title>{ title }</Title>
                <CarouselWrapper>
                    { this.renderItems() }                    
                </CarouselWrapper>
                <DotsWrapper>
                    { this.renderDots() }
                </DotsWrapper>
            </Container>
        )
    }
}