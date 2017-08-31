import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'react-slick'
import './SliderList.css'

class SilderList extends Component {

render() {
    const { children, settings} = this.props

    return (
        <SliderListBox>
            <NewSlider  {...settings}>
                {children}
            </NewSlider>
        </SliderListBox>
    );}

}

SilderList.propTypes = {
    children: PropTypes.node,
}
    
const NewSlider = styled(Slider)`
    margin: 0 auto;
    width: 100%;
    color: #333;
`
const SliderListBox = styled.div`
    margin: 0 auto;
    width: 100%;
    color: #333;
    /*background: #419be0;*/
`
export default SilderList;
