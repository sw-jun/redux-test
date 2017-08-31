import React from 'react';
import {} from 'semantic-ui-react';
import styled from 'styled-components';

import LIST from './imgs/icon_list.png';
import CART from './imgs/icon_cart.png';
import SEARCH from './imgs/icon_search.png';

class Head extends React.Component {
    render(){
        return (
            <HeadBox>
                <HeadButtonList>
                    <img alt="리스트" src={LIST}/>
                </HeadButtonList>

                <HeadTitle>오늘의 시장</HeadTitle>

                <HeadButtonSearch>
                    <img alt="검색" src={SEARCH}/>
                </HeadButtonSearch>             

                <HeadButtonCart>
                    <img alt="장바구니" src={CART}/>
                </HeadButtonCart>
            </HeadBox>
        )
    }
}
const HeadBox = styled.div`
    width: 375px;
    height: 72px;
    background-color: #f5f5f5;
    position: absolute;
    box-shadow: 0 1px 2px 0 rgba(215, 215, 215, 0.5), 0 2px 4px 0 rgba(227, 227, 227, 0.5);
`
const HeadTitle = styled.span`
    width: 101px;
    height: 30px;
    font-family: NotoSerifCJKkr;
    font-size: 21px;
    font-weight: bold;
    letter-spacing: -1.2px;
    text-align: center;
    color: #454545;

    position: absolute;
    top: 40px;
    left: 137.5px;
`
const HeadButton = styled.button`
    width: 20px;
    height: 20px;
    position: absolute;
`
    const HeadButtonList = HeadButton.extend`
        top: 35px;
        left: 16px;
    `
    const HeadButtonSearch = HeadButton.extend`
        top: 35px;
        left: 290px;
    `
    const HeadButtonCart = HeadButton.extend`
        top: 35px;
        left: 329px;    
    `
export default Head;