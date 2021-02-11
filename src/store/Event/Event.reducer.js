const INITIAL_STATE = {
  eventName: "",
  firstDate: "",
  lastDate: "",

  events: [],
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return ({
        ...state,
        eventName: action.payload.eventName,
        firstDate: action.payload.firstDate,
        lastDate: action.payload.lastDate
      })

    case "SELECT_EVENTS":
      return ({
        ...state,
        events: action.payload
      })

    default:
      return state;
  }
}
