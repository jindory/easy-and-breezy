import logo from './logo.svg';
import './App.css';
import StateTest from './StateTest';

function App() {

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img className="Avatar"
           src={props.user.avatarUrl}
           alt={props.user.name} />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
       <StateTest />
      </header>
    </div>
  );
}

export default App;
