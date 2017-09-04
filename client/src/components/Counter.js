import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render(){
        return (
            <h1>VALUE : { this.props.value }</h1>
        )
    }
}

// store의 state를 이 컴포넌트의 props와 매핑시켜줌
let mapStateToProps = (state) => {// reducer의 state를 현재 컴포넌트 props와 연결
    return {
        value: state.counter.value
      //(컴포넌트의 props) : reducer의 state
    }
}

Counter = connect(mapStateToProps)(Counter); 

export default Counter;

