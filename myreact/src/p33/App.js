import './App.css';
function Header() {
  return (
    <header>
      <h1><a href="/">WEB</a></h1>
    </header>
  );
}

function Nav2(props) {
  const lis = {};
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push( <li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}
function Article() {

}

function Reply(props) {

}
function App() {
  return (
    <div className="App">
      <Header></Header>
    <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ol>
    </nav>
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
    </div>
  );
}

export default App;
