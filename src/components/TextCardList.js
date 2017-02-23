import React, { PropTypes } from 'react'
import TextCard from './TextCard'

const TextCardList = (props) => {

  const { store } = props;
  const state = store.getState()

  return (
    <ul className='card-list'>
      {state.cards.map((textCard, i) =>
        <TextCard
          store={store}
          index={i}
          key={textCard.id}
          {...textCard}
        />
      )}
    </ul>
  )
}

TextCardList.propTypes = {
  store: PropTypes.object.isRequired,
}

export default TextCardList
