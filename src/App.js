// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styled from 'styled-components';
import { Link, Routes, Route, useParams } from 'react-router-dom';

// Header 컴포넌트
function Header(props){
  return <header className={props.className}><h1><Link to="/" onClick={(evt)=>{    
    props.onSelect();
  }}>WWW</Link></h1></header>
}

// styled-components 적용
const HeaderStyled = styled(Header)`
  border-bottom : 1px solid gray;
  padding: 20px;
  fontSize: 20px;
`;

// Nav 컴포넌트
function Nav(props) {
  const list = props.data.map((e) => {
    return <li key={e.id}><Link to={'/read/'+e.id} onClick={(evt) => {
      props.onSelect(e.id);  
    }}>{e.title}</Link></li>
  });
  // const list = [
  //   <li><a href="/read/1">html</a></li>,
  //   <li><a href="/read/2">css</a></li>
  // ]
  return <nav><ol>{list}</ol></nav>
}

// Article 컴포넌트
function Article(props) {
  console.log('props', props.title)
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

// Create 컴포넌트
function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={(evt) => {
      evt.preventDefault();
      // evt.target는 form 태그 자신을 가리킴
      const title = evt.target.title.value;
      const body = evt.target.body.value;
      // onCreate는 props니까 props로 호출
      props.onCreate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='title'></input></p>
      <p><textarea name='body' placeholder='body'></textarea></p>
      <p><input type='submit' value='Create'></input></p>
    </form>
  </article>
}

// App
function App() {
  const [mode,setMode] = useState('WELCOME');  // todo 삭제
  const [id, setId] = useState(null);  // todo 삭제
  const [nextId, setNextId] = useState(3);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
  ]);

  return (
    <div>
      <HeaderStyled onSelect={headerHandler()}></HeaderStyled>
      <Nav data={topics}  onSelect={navHandler()}></Nav>
      <Routes>
        <Route path="/" element={<Article title="Welcome" body="Hello, WEB!"></Article>}></Route>
        <Route path="/create" element={<Create onCreate={onCreateHandler()}></Create>}></Route>
        <Route path="/read/:topic_id" element={<Read topics={topics}></Read>}></Route>
      </Routes>
      <ButtonGroup>
        <Button component={Link} to="/create" variant="outlined" onClick={createHandler()}>Create</Button>        
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={deleteHandler()}>Delete</Button>
    </div>
  );

  // return 내부에 있던 함수들을 분리(Refactor)
  
  function Read(props) {
    const params = useParams();
    const id = Number(params.topic_id);
    const topic = props.topics.filter(e=>{
      if(e.id === id) {
        return true;
      } else {
        return false;
      }
    })[0];
    return <Article title={topic.title} body={topic.body}></Article>
  }

  function onCreateHandler() {
    return (title, body) => {
      const newTopic = { id: nextId, title, body };
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setId(nextId);
      setMode('READ');
      setNextId(nextId + 1);
    };
  }

  function navHandler() {
    return (id) => {
      setMode('READ');
      setId(id);
    };
  }

  function deleteHandler() {
    return () => {
      const newTopics = topics.filter((e) => {
        if (e.id === id) {
          return false;
        } else {
          return true;
        }
      });
      setMode('WELCOME');
      setTopics(newTopics);
    };
  }

  function createHandler() {
    return () => {
      setMode('CREATE');
    };
  }

  function headerHandler() {
    return () => {
      setMode('WELCOME');
    };
  }
}

export default App;