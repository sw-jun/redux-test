import React from 'react';
import {} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SliderList from './SliderList'
import CardView from './CardView'

import Data from './Data'

class NewListItem extends React.Component {
    constructor(props) {
        super(props);
        this.settings = {
            dots: false,
            arrows: false,
            speed: 300,
        
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            variableWidth: true,
            adaptiveHeight: false
        };
    }
    RenderCardView() {
        let arr = [];
    
        for (let key in Data) {
          console.log(Data[key])
          arr.push(<div key={key} className="arrWrap"
                        onClick={()=> {console.log('on click', key)}}>
                        
                        <CardView data={Data[key]}/>
                   </div>)
        }
        return arr;
    }
    render(){
        
        // //각각 다른 클래스네임을 props으로 받은값을 구분자로 생성
        // let boxClassName = this.props.className+'ItemListBox';        
        // let titleClassName = this.props.className+'ItemListTitle';
        // let detailClassName = this.props.className+'ItemListDetail';
        // let underBarClassName = this.props.className+'ItemListUnderBar';

        return (
            // <div className={boxClassName}>
            //     <span className={titleClassName}>{this.props.title}</span>
            //     <span className={detailClassName}>전체보기 ></span>
            //     <span className={underBarClassName}s />
            // </div>

            <NewListItemBox order={this.props.order}>
                <NewListItemTitle>{this.props.name}</NewListItemTitle>

                <Link to={this.props.route} style={{textDecoration: 'none', 
                                                    color: '#a7a7a7'}}>
                    <NewListItemDetail>
                        전체보기 >
                    </NewListItemDetail>

                </Link>

                <SliderList settings={this.settings}>
                    {this.RenderCardView()}
                </SliderList>

                <NewListItemUnderBar />
            </NewListItemBox>
        )
    }
}
const NewListItemBox = styled.div`
    position: absolute;
    top: ${props => (262 + props.order * 459)}px;
`
const NewListItemTitle = styled.span`
    width: 136px;
    height: 29px;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    letter-spacing: -0.2px;
    text-align: left;
    color: #2c2c2c;

    position: absolute;
    top: 42px;
    left: 24px;
`
const NewListItemDetail = styled.span`
    width: 70px;
    height: 20px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    text-align: center;
    color: #a7a7a7;

    position: absolute;
    top: 48px;
    left: 284px;
`
const NewListItemUnderBar = styled.span`
    width: 328.3px;
    height: 1px;
    border: solid 1px #eeeeee;

    position: absolute;
    top: 79px;
    left: 24px;
`
export default NewListItem;