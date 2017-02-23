import React, { PropTypes } from 'react'

const Message = (props) => {

  const { text } = props

  return (
    <p className='lead text-center'>{text}</p>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Message
