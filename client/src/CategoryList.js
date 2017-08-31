import React from 'react';
import {} from 'semantic-ui-react';
import styled from 'styled-components';

import CategoryListItem from './CategoryListItem.js'

const CATEGORY_LIST_ITEM = [ {name: "최신", route: "/"},
                             {name: "인기", route: "/popular"},
                             {name: "농산", route: "/crop"},
                             {name: "수산", route: "/sea"},
                             {name: "축산", route: "/animal"}];

class CategoryList extends React.Component {
    constructor(props){
        super(props);

        this.state = {currentCategory : 0};

        this.SetCurrentCategory = this.SetCurrentCategory.bind(this);
    }
    SetCurrentCategory(val){
        this.setState({currentCategory : val});
    }
    render(){
        return (
            <CategoryListBox>
                {/* <CategoryNew><Link to ="/">최신</Link></CategoryNew>
                <CategoryPopular><Link to ="/popular">인기</Link></CategoryPopular>
                <CategoryCrop>농산</CategoryCrop>
                <CategorySea>수산</CategorySea>
                <CategoryAnimal>축산</CategoryAnimal>*/}
                
                {CATEGORY_LIST_ITEM.map((item, i)=> {
                    return (<CategoryListItem name  = {item.name}
                                              order = {i}
                                              route = {item.route}
                                              active = {this.state.currentCategory}
                                              SetCurrentCategory = {this.SetCurrentCategory}
                                              key   = {i}
                            />);
                    })}
                <CategoryUnderbar currentCategory = {this.state.currentCategory}/>
            </CategoryListBox>
        )
    }
}
const CategoryListBox = styled.div`
    width: 375px;
    height: 48px;
    border: 1px solid #eeeeee;

    position: absolute;
    top: 72px;
`
const CategoryUnderbar = styled.div`
    width: 12px;
    height: 1px;
    border: solid 1px #2c2c2c;

    position: absolute;
    top: 39px;
    left: ${props => (78 + props.currentCategory * 56)}px;
`
export default CategoryList;