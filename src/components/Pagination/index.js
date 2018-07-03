import React, { Component } from 'react';
import { Wrapper, Num, Btn } from './styles';

export default class Pagination extends Component{
    renderPaginate = () => {
        let { totalPage, currentPage } = this.props;
        let showNumsArr = [];

        if(totalPage <= 9){
            for(let i = 0; i < totalPage; i++){
                showNumsArr.push(<Num key={i} active={i === currentPage -1} onClick={this.props.changePage("jump", i+1)}>{i+1}</Num>)
            }
        }else{
            if(currentPage < 5){
                for(let i = 0; i < 9; i++){
                    showNumsArr.push(<Num key={i} active={i === currentPage -1} onClick={this.props.changePage("jump", i+1)}>{i+1}</Num>)
                }
                showNumsArr[7] = <Num key={7} onClick={this.props.changePage("nextFive")}>···</Num>
                showNumsArr[8] = <Num key={8} onClick={this.props.changePage("jump", totalPage)}>{totalPage}</Num>
            }else if(currentPage <= totalPage - 5){
                let value = currentPage - 4;
                for(let i = 0; i < 9; i++){
                    showNumsArr.push(<Num key={i} active={i === 4} onClick={this.props.changePage("jump", value)}>{value}</Num>);
                    value++;
                }
                showNumsArr[0] = <Num key={0} onClick={this.props.changePage("jump", 1)}>1</Num>
                showNumsArr[1] = <Num key={1} onClick={this.props.changePage("prevFive")}>···</Num>
                showNumsArr[7] = <Num key={7} onClick={this.props.changePage("nextFive")}>···</Num>
                showNumsArr[8] = <Num key={8} onClick={this.props.changePage("jump", totalPage)}>{totalPage}</Num>
            }else{
                let value = totalPage - 8;
                for(let i = 0; i < 9; i++){
                    showNumsArr.push(<Num key={i} active={ value === currentPage } onClick={this.props.changePage("jump", value)}>{value}</Num>);
                    value++;
                }
                showNumsArr[0] = <Num key={0} onClick={this.props.changePage("jump", 1)}>1</Num>
                showNumsArr[1] = <Num key={1} onClick={this.props.changePage("prevFive")}>···</Num>
            }
        }
        return showNumsArr;
    }
    render(){
        return (
            <Wrapper>
                <Btn onClick={this.props.changePage("prev")}>上一页</Btn>
                { this.renderPaginate() }
                <Btn onClick={this.props.changePage("next")}>下一页</Btn>
            </Wrapper>
        )
    }
}