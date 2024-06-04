import {useState} from 'react';

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read/"+ t.id} id={t.id} onClick={(e) => {
          e.preventDefault();
          props.onChangeMode(Number(e.target.id)); // Number() 숫자로 바꿔주는 함수
        }}>
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}
function Header(props) {
  return (
    <header>
      <h1>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </article>
  );
}
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onCreate(title, body);
      }}>
        <div><input type='text' name='title' placeholder='title'></input></div>
        <div><textarea name="body" placeholder='body'></textarea></div>
        <div><input type='submit' value="Create"></input></div>
      </form>
    </article>
  );
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        props.onUpdate(title, body);
      }}>
        <div><input type='text' name='title' placeholder='title' value={title}
        onChange={(e)=>{
          console.log(e.target.value);
          setTitle(e.target.value);
        }}></input></div>
        <div><textarea name="body" placeholder='body' value={body}
        onChange={(e)=>{
          console.log(e.target.value);
          setBody(e.target.value);
        }}></textarea></div>
        <div><input type='submit' value="Update"></input></div>
      </form>
    </article>
  );
}
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  // const topics...
  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html은 쉽다, 아이 좋아'},
    {id: 2, title: 'css', body: 'css는 조금 어려워'},
    {id: 3, title: 'js', body: 'js는 정신없다, 살려줘'}
  ]);
  const [nextId, setNextId] = useState(4);

  let content = null;
  let contextControl = null;

  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello Web"></Article>;
  }
  else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title; 
        body=topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <li><a href={"/update/"+id} onClick={(e)=>{
      e.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>;
  }
  else if (mode === "CREATE") {
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics] // 배열 복사
      newTopics.push(newTopic); // Create버튼 눌러서 생성한거 복제된 배열에 추가
      setTopics(newTopics); // 변경내용을 newTopics 배열로 적용/반영
      setMode("READ");
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }
  else if (mode === "UPDEATE") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title; 
        body=topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=> {
        console.log(title, body);
        const newTopics = [...topics];
        const updatedTopic = {id:id, title:title, body:body};
        for (let i = 0; i < newTopics.length; i++){
          if(newTopics[i].id === id) {
            newTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics[newTopics];
      }}></Update>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME');
      }}>
      </Header>
      <Nav topics={topics} onChangeMode={(_id)=> {
        setMode('READ');
        setId(_id);
      }}>
      </Nav>
      {content}
      <ul>
        <li>
          <a href="/create" onClick={(e)=>{
          e.preventDefault();
          setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
