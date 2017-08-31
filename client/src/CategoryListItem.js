import React from 'react';
import {} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class CategoryListItem extends React.Component {
    render(){
        return (
            <div>
                <Item order={this.props.order}>
                    <Link to={this.props.route} 
                          style={{textDecoration: 'none', 
                                  color: this.props.active === this.props.order ? '#2c2c2c' : '#a7a7a7' }}
                          onClick={() => this.props.SetCurrentCategory(this.props.order)}>
                        {this.props.name}
                    </Link>
                </Item>
                
            </div>
        )
    }
}

const Item = styled.span`
    width: 28px;
    height: 20px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
    color: #a7a7a7;
    
    position: absolute;
    top : 12px;
    left: ${props => (70 + props.order * 56)}px;
`

export default CategoryListItem;