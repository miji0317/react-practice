// import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Header(props) {
  console.log(props);
  return <header><h1><a href="/" onClick={(evt) => {
    console.log('evt', evt);
    evt.preventDefault();
    props.onSelect();
  }}>Web</a></h1></header>
}

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

function Article(props) {
  console.log('props', props.title)
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}


function App() {
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
  ];

  return (
    <div>
      <Header onSelect={() => {
        alert('Header!!!');
      }}></Header>
      <Nav data={topics} onSelect={(id) => {
        alert('Nav!!!' + ',' + id);
      }}></Nav>
      <Article title="Welcome" body="Hello, Web!"></Article>
      <ButtonGroup variant="outlined" aria-label="outlined button group" size="small" color="secondary">
        <Button variant='outlined' onClick={() => {
          alert('create!');
        }}>Create</Button>
        <Button variant='outlined'>Update</Button>
        <Button variant='outlined'>Delete</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
