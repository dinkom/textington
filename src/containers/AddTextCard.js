import React, { PropTypes } from 'react'
import { addTextCard } from '../actions/index'

let AddTextCard = (props) => {

  const { store } = props
  let input

  const submitForm = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      alert('Please enter text.')
      return
    }
    store.dispatch(addTextCard(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <label className='form-label'>Add a new text card</label>
        <input className='form-control' ref={node => {
          input = node
        }} />
      <button type="submit" className='btn btn-block default-back'>
        Add
      </button>
      </form>
    </div>
  )
}

AddTextCard.propTypes = {
  store: PropTypes.object.isRequired,
}

export default AddTextCard
