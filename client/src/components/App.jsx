import React from 'react'
import styled from 'styled-components'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      dob: '',
      agreement: false
    }
  }

  render() {
    return (
      <div>
        <p>App</p>
      </div>
    )
  }


}