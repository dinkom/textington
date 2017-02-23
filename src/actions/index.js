import * as CONSTANTS from '../constants/constants'

/*
 * action creators
 */

let nextTextCardId = 2

export const goToDefaultDisplay = () => {
  return {
    type: CONSTANTS.GO_TO_DEFAULT_DISPLAY,
    display: CONSTANTS.DISPLAY_CARDS
  }
}

export const addingTextCard = () => {
  return {
    type: CONSTANTS.ADDING_TEXTCARD,
    display: CONSTANTS.DISPLAY_ADD
  }
}

export const addTextCard = (text) => {
   return {
     type: CONSTANTS.ADD_TEXTCARD,
     displayView: CONSTANTS.DISPLAY_CARDS,
     id: nextTextCardId++,
     text
   }
 }

export const deleteTextCard = (index) => {
  return {
    type: CONSTANTS.DELETE_TEXTCARD,
    index
  }
}

export const editingTextCard = (index, text) => {
  return {
    type: CONSTANTS.EDITING_TEXTCARD,
    displayView: CONSTANTS.DISPLAY_EDIT,
    index,
    text
  }
}

export const editTextCard = (index, text) => {
  return {
    type: CONSTANTS.EDIT_TEXTCARD,
    displayView: CONSTANTS.DISPLAY_CARDS,
    index,
    text
  }
}
