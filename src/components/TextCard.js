import React, { PropTypes } from 'react'
import { deleteTextCard, editingTextCard } from '../actions/index'

const TextCard = (props) => {

  const { text, store, index } = props

  const deleteCard = () => {
    let result = confirm('Are you sure you want to delete this card?')
    if (result) {
      store.dispatch(deleteTextCard(index))
    }
  }

  const editCard = () => {
    store.dispatch(editingTextCard(index, text))
  }

  return (
    <li className='default-back'>
      <div className='card-content'>
        {text}
      </div>
      <div className='card-controls'>
        <span onClick={editCard}>edit</span>&nbsp;|&nbsp;
        <span onClick={deleteCard}>delete</span>
      </div>
    </li>
  )
}

TextCard.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  store: PropTypes.object.isRequired
}

export default TextCard
