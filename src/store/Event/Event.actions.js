export function selectEvents (eventInfos) {
  return {
    type: "SELECT_EVENTS",
    payload: eventInfos
  };
}

export function eventDate (eventDate) {
  return {
    type: "EVENT_DATE",
    payload: eventDate
  }
}