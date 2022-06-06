import logo from './logo.svg';
import './App.css';

function Header() {
  return <header>
    <h1><a href="/">Web</a></h1>
  </header>
}

function Nav(props) {
  console.log('props', props.data)
  const list = props.data.map((e) => {
    return <li key={e.id}><a href={'/read/'+e.id}>{e.title}</a></li>
  });
  // const list = [
  //   <li><a href="/read/1">html</a></li>,
  //   <li><a href="/read/2">css</a></li>
  // ]
  return <nav>
    <ol>
      {list}
    </ol>
  </nav>
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
  ]
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Header></Header>
      <Nav data={topics}></Nav>
      <Article title="Welcome" body="Hello, Web!"></Article>
    </div>
  );
}

export default App;
