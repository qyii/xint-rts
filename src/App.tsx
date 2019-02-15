import * as React from 'react'
import './app.less'
import RtsTop from './components/RtsTop'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <RtsTop />
        <header className="App-header">
          <h1 className="App-title">Welcome to rts</h1>
        </header>
      </div>
    )
  }
}

export default App
