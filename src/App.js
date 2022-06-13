// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styled from 'styled-components';

// Header 컴포넌트
function Header(props){
  return <header className={props.className}><h1><a href="/" onClick={(evt)=>{    
    evt.preventDefault(); 
    props.onSelect();
  }}>WWW</a></h1></header>
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
    return <li key={e.id}><a href={'/read/'+e.id} onClick={(evt) => {
      evt.preventDefault();
      props.onSelect(e.id);  
    }}>{e.title}</a></li>
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
function Create() {
  return <article>
    <h2>Create</h2>
    <form>
      <p><input type='text' placeholder='title'></input></p>
      <p><textarea placeholder='body'></textarea></p>
      <p><input type='submit' value='Create'></input></p>
    </form>
  </article>
}

// App
function App() {
  // state를 읽을 때는 mode, 바꿀 때는 setMode, 초기 상태는 useState
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  console.log(mode, id);

  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web!"></Article>
  } else if (mode === 'READ') {
    const topic = topics.filter(e => {
    if (e.id === id) {
      return true;
    } else {
      return false;
    }
  })[0];
  content = <Article title={topic.title} body={topic.body}></Article>
  } else if (mode === 'CREATE') {
    content = <Create></Create>;
  }

  return (
    <div>
      <HeaderStyled onSelect={() => {
       setMode('WELCOME');
      }}></HeaderStyled>
      <Nav data={topics} onSelect={(id) => {
        setMode('READ');
        setId(id);
      }}></Nav>
      {content}
      <ButtonGroup variant="outlined" aria-label="outlined button group" size="small" color="secondary">
        <Button variant='outlined' onClick={() => {
          setMode('CREATE');
        }}>Create</Button>
        <Button variant='outlined'>Update</Button>
        <Button variant='outlined'>Delete</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
