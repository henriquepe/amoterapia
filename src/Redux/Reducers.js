const INITIAL_STATE = {
  libraryDrawer: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN_LIBRARY_DRAWER':
      return {
        ...state,
        libraryDrawer: action.payload
      }

    default:
      return state;
  }
}
