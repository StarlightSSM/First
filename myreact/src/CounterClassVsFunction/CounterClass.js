import {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount(){console.log('component mounted')};
    componentWillUnmount(){console.log('component will unmounted')};

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count) {
            console.log("Count state has changed", this.state.count);
        }
        if (prevState.name !== this.state.name) {
            console.log("Name state has changed", this.state.name);
        }
    }

    increment = () => {
        this.setState({count:this.state.count + 1});
    }
    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>증가하기</button>
                <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                <p>Count: {this.state.count}</p>
                <p>Name: {this.state.name}</p>
            </div>
        );
    }
}

export default Counter;