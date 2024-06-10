import { Component } from "react";

// will: 작동 전에 앞으로의 동작을 이야기 함
// did: 작동 후
// mount -> update -> unmount
// mount: constructor -> getDerivedStateFromProps -> render -> componentDidMount
// update: props, state, 부모의 화면, 
// this.forceUpdate 이런 것들이 바뀔 때 update 한다.
// getDerivedStateFromProps -> shouldComponentUpdate -> render
// -> getSnapshotBeforeUpdate -> componentDidUpdate
// unmount: componentWillUnmount

class LifeCycleSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            color: null
        }
    }
    myRef = null;
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("나는 지금 getDerivedStateFromProps 상태 임!");
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color};
        }
        return null;
    }

    plusHandler = () => {this.setState({number:this.state.number + 1})};

    render() {
        console.log("난 지금 render 상태 임!!");
        return (
            <div>
                <h1 style={{color:this.props.color}} ref={ref=>this.myRef=ref}>
                    {this.state.number}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.plusHandler}>증가하기</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("난 지금 componentDidMount 상태 임!");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("난 지금 shouldComponentUpdate 상태 임!");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("난 지금 getSnapShotBeforeUpdate 상태 임!");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("난 지금 componentDidUpdate 상태 임!");
        if (snapshot) {
            console.log("snapshot(업데이트 전의 색상): ", snapshot);
        }
    }
    componentWillUnmount() {
        console.log("난 지금 componentWillUnmount 상태 임!");
    }
}

export default LifeCycleSample;
