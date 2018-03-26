import React, { Component } from 'react'
import Beer from './Beer'

const styles = {
  container: {
    background: '-webkit-linear-gradient(left, #f75c1a 0%,#f7601a 43%,#f7931a 97%)',
    height: '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  beer: {
    fontFamily: 'Arial, Helvetica',
    background: '#363636',
    color: '#fff',
    border: 'none',
    borderBottomLeftRadius: '3px',
    borderTopLeftRadius: '3px',
    padding: '5px',
    margin: 0,
    display: 'flex',
    alignItems: 'center'
  },
  address: {
    fontFamily: 'Arial, Helvetica',
    background: '#209cee',
    color: '#fff',
    border: 'none',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    padding: '7px',
    margin: 0,
    verticalAlign: 'bottom'
  }
}

export default function Footer() {
  return (
    <footer style={styles.container}>
      <button style={styles.beer}>Buy me a beer &nbsp;<Beer fill="#fff" height="18px"/></button>
      <span style={styles.address}>1CL4hRq183mGWL4xHATnXehYkvticyE3hv</span>
    </footer>
  )
}
