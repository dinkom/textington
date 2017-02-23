import React, { PropTypes } from 'react'
import { editTextCard, goToDefaultDisplay } from '../actions/index'

let EditTextCard = (props) => {

  const { store } = props
  const state = store.getState()
  let input

  const editCard = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      alert('Please enter text.')
      return
    }
    store.dispatch(editTextCard(state.toEdit.index, input.value))
  }

  const navigateToHome = () => {
    store.dispatch(goToDefaultDisplay())
  }

  return (
    <div>
      <form onSubmit={editCard}>
        <label className='form-label'>Edit text card</label>
        <input className='form-control' ref={node => {
          input = node
        }} defaultValue={state.toEdit.text} />
      <button type="submit" className='btn btn-block default-back'>Save</button>
        <button onClick={navigateToHome} className='btn btn-block default-back'>Cancel</button>
      </form>
    </div>
  )
}

EditTextCard.propTypes = {
  store: PropTypes.object.isRequired,
}

export default EditTextCard
