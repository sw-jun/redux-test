import React, { Component } from 'react';
import styled from 'styled-components';

//import './CardView.css'

class CardView extends Component {

    render() {
        return (
            <CardContainer className="cardWrap">
                <CardImg src={this.props.data.imgUrl} alt=''/>
                <CardTitle>{this.props.data.title}</CardTitle>
                <CardHarvestDate>{this.props.data.harvestDate}</CardHarvestDate>
                <CardLeftQuantity>{this.props.data.leftQuantity}</CardLeftQuantity>
                <CardPrice>{this.props.data.price}</CardPrice>
            </CardContainer>
        );
    }
}

const CardContainer = styled.div`

    width: 46vw;
    height: 355px;
    background-color:#fff;
    margin-right:2vw;
`
const CardImg = styled.img`
    width: 46vw;
    height: 224px;
`
const CardTitle = styled.p`
    width: 140px;
    height: 44px;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.38;
    text-align: left;
    color: #2c2c2c;
    margin-top: 7px;
`
const CardHarvestDate = styled.p`
    width: 82px;
    height: 14px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    line-height: 1.0;
    text-align: left;
    color: #417505;
    margin-top: 4px;
`
const CardLeftQuantity = styled.p`
    width: 92px;
    height: 20px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    text-align: left;
    color: #2c2c2c;
    margin-top: 6px;
`
const CardPrice = styled.p`
    width: 76px;
    height: 30px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #2c2c2c;
margin-top: 6px;
`
export default CardView;
