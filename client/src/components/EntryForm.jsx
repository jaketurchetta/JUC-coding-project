import React from 'react'
import styled from 'styled-components'


const EntryForm = ({ handleSubmit, handleChange, name, email, birthDate, toggleCheck, emailConsent, handleClear }) => (

  <form onSubmit={e => handleSubmit(e)}>
    <FormWrapper>
      <InputDiv>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={name} onChange={handleChange} placeholder="John Smith" required />
      </InputDiv>
      <InputDiv>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={email} onChange={handleChange} placeholder="example@email.com" required />
      </InputDiv>
      <InputDiv>
        <label htmlFor="birthDate">Birth date</label>
        <input id="birthDate" name="birthDate" type="date" value={birthDate} onChange={handleChange} />
      </InputDiv>
      <CheckboxDiv>
        <input id="emailConsent" name="emailConsent" type="checkbox" checked={emailConsent} onChange={toggleCheck} required />
        <label htmlFor="emailConsent">I agree to be contacted via email.</label>
      </CheckboxDiv>
      <ButtonsDiv>
        <button type="reset" onClick={handleClear}>Clear</button>
        <button type="submit">Submit</button>
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
  justify-content: left;
`

const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: right;
`

export default EntryForm
