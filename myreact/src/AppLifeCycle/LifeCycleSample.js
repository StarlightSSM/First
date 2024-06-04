import { Component } from "react";

// will: 작동 전에 앞으로의 동작을 이야기 함
// did: 작동 후
// mount -> update -> unmount
// mount: constructor -> getDerivedStateFromProps -> render -> componentDidMount
// update: props, state, 부모의 화면, 
// this.foreUpdate 이런 것들이 바뀔 때 update 한다.
// getDerivedStateFromProps -> ShouldComponentUpdate -> render
// -> getSnapshotBeforeUpdate -> componentDidUpdate
// unmount: componentWillUnmount

class LifeCycleSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            
        }
    }
    myRef = null;
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("나는 지금 getDerivedStateFromProps 상태 임!");
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color};
        }
    }

    render() {
        console.log("난 지금 render 상태 임!!");
        return (
            <div>

            </div>
        )
    }

    componentDidMount() {
        console.log("난 지금 componentDidMount 상태 임!");
    }
}

export default LifeCycleSample;