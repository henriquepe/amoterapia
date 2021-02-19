const INITIAL_STATE = {
  events: [],

  eventDate: "",
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SELECT_EVENTS":
      return ({
        ...state,
        events: action.payload
      })

    case "EVENT_DATE":
      return ({
        ...state,
        eventDate: action.payload
      })

    default:
      return state;
  }
}
