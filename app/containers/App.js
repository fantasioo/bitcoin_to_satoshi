import React, { Component } from 'react'
import Header from '../components/Header'
import Converter from '../components/Converter'
import Footer from '../components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Converter />
        <Footer />
      </div>
    )
  }
}
