import React, { Component } from 'react';
import '../styles/App.css';
import MdInput from './MdInput';
import MdOutput from './MdOutput';

class App extends Component {

  constructor () {
    super()
    this.state = { contents: [] };
    this.reset = this.reset.bind(this);
    this.chango = this.chango.bind(this);
  }

  reset() {
    console.log('RESET!');
    this.setState(prevState => {return { contents: [] } });
  }

  chango(val) {
    console.log('CHANGO!')
    this.setState(prevState => {return { contents: val.split('\n') } });
    console.log(val.split('\n'));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">freeCodeCamp Markdown Previewer</h1>
        </header>
        <button onClick={this.reset} >reset</button>
        <MdInput chango={this.chango} />

        <MdOutput values={this.state.contents}/>
      </div>
    );
  }
}

export default App;
