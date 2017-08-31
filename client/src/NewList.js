import React from 'react';
import {} from 'semantic-ui-react';
import styled from 'styled-components';

import NewListItem from './NewListItem.js'

const NEW_LIST_ITEM = [{name : "실사긴 최신 상품", route : "/"}]
                        //    {name : "매진입박 상품",   route : "/"},
                        //    {name : "오늘의 프로모션",  route : "/"},
                        //    {name : "여름 바닷가 특전", route : "/"}

class NewList extends React.Component {
    render(){
        return (
        <NewListBox>
            {/* <NewListItem order={0} className="New" title="실시간 최신 상품"/>
            <NewListItem order={1} className="Sold" title="매진임박 상품"/>
            <NewListItem order={2} className="Today" title="오늘의 프로모션"/>
            <NewListItem order={3} className="Spectial" title="여름 바닷가 특전"/> */}
            {NEW_LIST_ITEM.map((item, i)=> {
                    return (<NewListItem name  = {item.name}
                                      order = {i}
                                      route = {item.route}
                                      key   = {i}
                            />);
                    })}
        </NewListBox>
        )
    }
}
const  NewListBox = styled.div`
    width: 375px;
    height: 2104px;
    background-color: #ffffff;

    position: absolute;
    top: 120px;
`
export default NewList;