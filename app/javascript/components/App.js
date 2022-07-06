import React, { Component } from 'react'

import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SpaceIndex from "./pages/SpaceIndex"
import SpaceShow from "./pages/SpaceShow"
import SpaceNew from "./pages/SpaceNew"
import SpaceEdit from "./pages/SpaceEdit"
import NotFound from "./pages/NotFound"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  render () {

    return (
      <>
      <h1>How You Doing?</h1>
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/spaceindex" component={SpaceIndex} />
          <Route path="/spaceshow" component={SpaceShow} />
          <Route path="/spacenew" component={SpaceNew} />
          <Route path="/spaceedit" component={SpaceEdit} />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
      </>
    )

  }

}

export default App
