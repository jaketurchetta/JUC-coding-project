import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import EntryForm from './EntryForm.jsx'
import { verifyEmail, verifyBirthDate } from './helpers/validations'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      name: '',
      email: '',
      birthDate: '',
      emailConsent: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.addUser = this.addUser.bind(this)
  }

   // FORM HANDLERS
   handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!verifyEmail(this.state.email)) {
      alert('Please enter a valid email address.')
    } else if (!verifyBirthDate(this.state.birthDate)) {
      alert('Please enter a valide birth date or leave it blank.')
    } else {
      this.addUser(JSON.stringify([this.state]))
      alert('Success! We will be in touch shortly :)')
      this.handleClear()
    }
  }

  handleCheck() {
    this.setState({ emailConsent: !this.state.emailConsent })
  }

  handleClear() {
    this.setState({
      name: '',
      email: '',
      birthDate: '',
      emailConsent: false
    })
  }

  // ERROR HANDLING
  handleError(error) {
    console.log(error)
  }

  // HTTP REQUESTS
  addUser(data) {
    axios.post('https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users', data)
      .then(this.setState({
        id: this.state.id++
      }, console.log(this.state.id)
      ))
      .catch(this.handleError)
  }

  render() {
    return (
      <AppWrapper>
        <h1>Contact Us</h1>
        <EntryForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
          email={this.state.email}
          dob={this.state.dob}
          toggleCheck={this.handleCheck}
          agreement={this.state.agreement}
          handleClear={this.handleClear} />
      </AppWrapper>
    )
  }


}

const AppWrapper = styled.div`
  font-family: 'Amazon Ember', Arial, sans-serif;
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`
