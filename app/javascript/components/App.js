import React from "react"
import Header from "./components/Header"
class App extends React.Component {
  render () {
    return (
      <>
      <h1>How You Doing?</h1>
      <Header {...this.props} />
      </>
    );
  }
}

export default App
