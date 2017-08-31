import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import Head from './Head.js';
import CategoryList from './CategoryList.js'
import NewList from './NewList.js';
import PopularList from './PopularList.js';

class Container extends React.Component {
    render(){
        return (
            <ContainerBox>
                <Route path = "/" component = {Head} />
                <Route path = "/" component = {CategoryList} />>

                <Route path = "/New" component = {NewList} />
                <Route exact path = "/" component = {NewList} />
                <Route exact path = "/popular" component = {PopularList} />
            </ContainerBox>
        )
    }
}
const ContainerBox = styled.div`

`
export default Container;