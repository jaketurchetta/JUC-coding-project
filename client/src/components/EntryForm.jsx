import React from 'react'
import styled from 'styled-components'


const EntryForm = ({ handleSubmit, handleChange, name, email, birthDate, toggleCheck, emailConsent, handleClear }) => (

  <form onSubmit={e => handleSubmit(e)}>
    <FormWrapper>
      <InputDiv>
        <Labels htmlFor="name">Name</Labels>
        <input id="name" name="name" type="text" value={name} onChange={handleChange} placeholder="John Smith" required />
      </InputDiv>
      <InputDiv>
        <Labels htmlFor="email">Email</Labels>
        <input id="email" name="email" type="text" value={email} onChange={handleChange} placeholder="example@email.com" required />
      </InputDiv>
      <InputDiv>
        <Labels htmlFor="birthDate">Birth date</Labels>
        <input id="birthDate" name="birthDate" type="date" value={birthDate} onChange={handleChange} />
      </InputDiv>
      <CheckboxDiv>
        <input id="emailConsent" name="emailConsent" type="checkbox" checked={emailConsent} onChange={toggleCheck} required />
        <label htmlFor="emailConsent">I agree to be contacted via email.</label>
      </CheckboxDiv>
      <ButtonsDiv>
        <ClearButton type="reset" onClick={handleClear}>Clear</ClearButton>
        <SubmitButton type="submit">Submit</SubmitButton>
      </ButtonsDiv>
    </FormWrapper>
  </form>

)

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 15px;
`

const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`

const Labels = styled.label`
  margin-bottom: 5px;
`

const ClearButton = styled.button`
  background: #c93131;
  border: 0px;
  border-radius: 5px;
  height 50px;
  width: 90px;
  margin-right: 10px;
  color: white;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
`

const SubmitButton = styled.button`
  background: #189a1c;
  border: 0px;
  border-radius: 5px;
  height 50px;
  width: 90px;
  margin-right: 10px;
  color: white;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 20px;
`

export default EntryForm
