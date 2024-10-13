// TODO: import actions and implement reducer for each action
import {
  ADD_BOOK,
  REMOVE_BOOK,
  SEARCH_BOOKS
} from './actions'

export default function reducer(prevState, {action, payload}) {
  const{bookSearchResults, favoriteBooks} = prevState
  switch(action) {
    case ADD_BOOK:
      saveToLocalStorage([...favoriteBooks, payload])
      return {...prevState, favoriteBooks: [...favoriteBooks, payload]}
    case REMOVE_BOOK:
      saveToLocalStorage(favoriteBooks.filter(book => book.id !== payload))
      return {...prevState, favoriteBooks: favoriteBooks.filter(book => book.id !== payload)}
    case SEARCH_BOOKS:
      return {...prevState, bookSearchResults: [...payload]}
    default:
      return prevState
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem('favoriteBooks', JSON.stringify(favBooks))
}