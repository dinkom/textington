import * as CONSTANTS from '../constants/constants'

const default_state = {
  cards: [{
    id: 0,
    text: CONSTANTS.DEF_01
  },
  {
    id: 1,
    text: CONSTANTS.DEF_02
  }],
  display: CONSTANTS.DISPLAY_CARDS
}

function textCards(state = default_state, action) {
  switch (action.type) {
    case CONSTANTS.ADD_TEXTCARD:
      return Object.assign({}, state, {
        display: CONSTANTS.DISPLAY_CARDS,
        cards: [
          ...state.cards,
          {
            id: action.id,
            text: action.text
          }
        ]
      })
    case CONSTANTS.DELETE_TEXTCARD:
      return {
        display: state.display,
        cards: [
          ...state.cards.slice(0, action.index),
          ...state.cards.slice(action.index + 1)
        ]
      }
    case CONSTANTS.EDIT_TEXTCARD:
      return {
        display: CONSTANTS.DISPLAY_CARDS,
        cards:
          state.cards.map((textCard, index) => {
            if (index === action.index) {
              return Object.assign({}, textCard, {
                text: action.text
              })
            }
            return textCard
          })
      }
    case CONSTANTS.GO_TO_DEFAULT_DISPLAY:
      return {
        ...state,
        display: CONSTANTS.DISPLAY_CARDS
      }
    case CONSTANTS.ADDING_TEXTCARD:
      return {
        ...state,
        display: CONSTANTS.DISPLAY_ADD
      }
    case CONSTANTS.EDITING_TEXTCARD:
      return {
        ...state,
        display: CONSTANTS.DISPLAY_EDIT,
        toEdit: {
          index: action.index,
          text: action.text
        }
      }
    default:
      return state
  }
}

export default textCards
