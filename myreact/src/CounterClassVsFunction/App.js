// import Counter from './CounterClass';
import Counter from './CounterFunc';

// 리액트 공식 문서에서는 함수형 컴포넌트와 훅을 사용 권장
// 함수형 컴포넌트가 코드가 간결(가독성 우수함)
// 클래스형이 함수형보다 메모리 차지를 많이함.
function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    )
}
export default App;