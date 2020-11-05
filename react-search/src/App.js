import React from 'react';
import { indexOf, binarySearch } from './searchAlgo'

class App extends React.Component {

  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleIndex = (e) => {
    e.preventDefault()
    let arr = []
    arr.push(this.state.input)
    arr = parseInt(arr)
    console.log(arr)
  }




  render() {
    const myarr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

    return (
      <main className='App'>
        <form>
          <label>Search:
        <input name="search" type="number" value={this.state.input} onChange={this.handleChange}></input>
          </label>
          <button name="index" onClick={this.handleIndex}>Index</button>
        </form>
      </main>
    );
  }
}

export default App;