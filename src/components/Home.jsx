import React, { Component } from 'react'
import HomeItem from './HomeItem'

export class Home extends Component {
  render() {
    return (
      <>
      <div className="container">
        <h1>Welcome to the home page!</h1>
        <div className="row">
          <HomeItem/>
        </div>
      </div>
      </>
    )
  }
}

export default Home