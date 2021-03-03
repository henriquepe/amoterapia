const INITIAL_STATE = {
  libraryDrawer: false,

  hideMeetingDrawer: false,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN_LIBRARY_DRAWER':
      return {
        ...state,
        libraryDrawer: action.payload
      }

    case 'HIDE_MEETING_DRAWER':
    return {
      ...state,
      hideMeetingDrawer: action.payload
    }

    default:
      return state;
  }
}
