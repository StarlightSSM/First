import { Component } from "react";
import LifeCycleSample from './LifeCycleSample';

class App extends Component {
    state = {color:'#000000'}
    getRandomColor(){
        return '#' + Math.floor(
            Math.random() * 255*255*255 - 1).toString(16);
    }
    randomClick = () => {
        this.setState({color:this.getRandomColor()});
    }
    render() {
        return (
            <div>
                <button onClick={this.randomClick}>랜덤 색상 만들기!</button>
                <LifeCycleSample color={this.state.color}/>
            </div>
        )
    }
}

export default App;