import React, { Component } from 'react'
import sb from 'satoshi-bitcoin'

import Btc from './Btc'
import Satoshi from './Satoshi'
import Copy from './Copy'

const orange ='#f75c1a'

const styles = {
  container: {
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  column: {
    margin: '12px 0'
  },
  symbol: {
    border: 'none',
    padding: '5px',
    margin: 0,
    background: orange,
    verticalAlign: 'bottom'
  },
  input: {
    fontFamily: 'Arial, Helvetica',
    fontSize: '18px',
    padding: '7px 5px',
    margin: 0,
    color: orange,
    border: `2px solid ${orange}`
  },
  cursor: {
    cursor: 'pointer'
  }
}

function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

function saveState(state) {
  chrome.storage.local.set({state: JSON.stringify(state)})
}

export default class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btc: 0,
      sat: 0
    }

    this.handleCopyToClipBoard = this.handleCopyToClipBoard.bind(this)
    this.handleBtcToSat = this.handleBtcToSat.bind(this)
    this.handleSatToBtc = this.handleSatToBtc.bind(this)
  }

  componentWillMount() {
    chrome.storage.local.get('state', (obj) => {
      const { state } = obj
      const initialState = JSON.parse(state || '{}')
      this.setState(initialState)
    })
  }

  handleCopyToClipBoard(symbol) {
    copyTextToClipboard(this.state[symbol])    
  }

  handleBtcToSat(event) {
    try {
      const btc = event.target.value
      const sat = sb.toSatoshi(btc)
      this.setState({btc, sat})
      saveState(this.state)
    } catch (e) {
      // use the error throw by sb parser
      //console.error(e)
    }
  }

  handleSatToBtc(event) {
    try {
      const sat = event.target.value
      const btc = sb.toBitcoin(sat)
      this.setState({sat, btc})
      saveState(this.state)
    } catch (e) {
      // use the error throw by sb parser
      //console.error(e)
    }
  }

  render() {
    const {btc, sat} = this.state

    return (
      <div style={styles.container}>

        <div style={styles.column}>
          <button style={styles.symbol}>
            <Btc height="26px" fill="#000"/>
          </button>
          <input onChange={this.handleBtcToSat} style={styles.input} value={btc} />
          <button onClick={e => this.handleCopyToClipBoard('btc')} style={Object.assign(styles.symbol, styles.cursor)}>
            <Copy height="26px" fill="#000"/>
          </button>
        </div>

        <div style={styles.column}>
          <button style={styles.symbol}>
            <Satoshi height="26px" fill="#000"/>
          </button>
          <input onChange={this.handleSatToBtc} style={styles.input} value={sat} />
          <button onClick={e => this.handleCopyToClipBoard('sat')} style={Object.assign(styles.symbol, styles.cursor)}>
            <Copy height="26px" fill="#000"/>
          </button>
        </div>

      </div>
    )
  }
}
