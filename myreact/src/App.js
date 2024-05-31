import {useState} from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1><a href="/">WEB</a></h1>
    </header>
  );
}

function Header2(props) {
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  );
}

function Header3(props) {
  return (
    <header>
      <h1><a href="/" onClick={function(e){
        e.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ol>
    </nav>
  )
}

function Nav2(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={"/read/"+ t.id}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  )
}

function Reply(props) {

}

function App() {
  const topics = [
    {id: 1, title: 'html', body: 'html은 쉽다, 아이 좋아'},
    {id: 2, title: 'css', body: 'css는 조금 어려워'},
    {id: 3, title: 'js', body: 'js는 정신없다, 살려줘'}
  ];
  let myNumber = 10;
  const [myState, setMyState] = useState(0);
  setTimeout(function(){
    myNumber++;
    setMyState(myState + 1);
    console.log(`myNumber: ${myNumber}, myState: ${myState}`);
  }, 2000);
  return (
    <div className="App">
      <Header3 title="WEB" onChangeMode={function(){alert('나는 header')}}/>
      <Header></Header>
      <Header2 title="react"/>
      <Header3 title="nodejs"/>
      <Nav></Nav>
      <Nav2 topics={topics}/>
      <Reply comments="아싸 1등" userid="한량"/>
      <Reply comments="아싸 2등" userid="한량2"/>
      <Reply comments="참 좋은 글이네요" userid="정상인"/>
      <div>
        <p>내가 가지고 있는 숫자는 {myNumber}입니당.</p>
        <p>내가 가지고 있는 상태 값은 {myState}입니당.</p>
      </div>
      <Article></Article>
    </div>
  );
}

export default App;
