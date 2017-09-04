import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Buttons extends React.Component {
    render () {
        return (
            <div>
              <button type="button"
                      onClick={this.props.onIncrement}>
                      +
              </button>
              <button type="button"
                      onClick={this.props.onDecrement}>
                      -
              </button>
            </div>
        )
    }
}
let mapDispatchToProps = (dispatch) => {  //
  //return bindActionCreators(actions, dispatch); 로도 사용 가능
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())

    //(컴포넌트의 props형 함수) : reducer의 state
  }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);
//  connect(옵션)는 새로운 함수반환. 이 반환되는 함수를 통해
//  store에 연결된 강화된 Buttons 컴포넌트가 반환 됨
//  옵션인 없으면 this.props.store로 접근 가능

export default Buttons;
