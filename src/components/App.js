import React, { PropTypes } from 'react'
import 'bootstrap-jquery';
import Navbar from './Navbar'
import TextCardList from './TextCardList'
import AddTextCard from '../containers/AddTextCard'
import EditTextCard from '../containers/EditTextCard'
import Message from '../components/Message'
import { DISPLAY_ADD, DISPLAY_EDIT } from '../constants/constants'

const App = (props) => {

  const { store } = props
  const state = store.getState()
  let component_to_render
  let message

  switch (state.display) {
    case DISPLAY_ADD:
      component_to_render = <AddTextCard store={store} />
      break
    case DISPLAY_EDIT:
      component_to_render = <EditTextCard store={store} />
      break
    default:
      component_to_render = <TextCardList store={store} />
      if (!state.cards.length) {
        message = <Message text={'It seems there are no cards to display. Why not add one?'} />
      }
  }

  return (
    <div>
      <Navbar store={store} />
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            {component_to_render}
            {message}
          </div>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
