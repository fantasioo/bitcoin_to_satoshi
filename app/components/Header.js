import React, { Component } from 'react'
import Logo from './Logo'

const styles = {
  container: {
    background: '-webkit-linear-gradient(left, #f75c1a 0%,#f7601a 43%,#f7931a 97%)',
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default function Header() {
  return (
    <header style={styles.container}>
      <Logo width="130px" />
    </header>
  )
}
