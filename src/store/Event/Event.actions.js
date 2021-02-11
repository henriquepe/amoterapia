export function addEvent (eventInfos) {
  return {
    type: "ADD_EVENT",
    payload: eventInfos
  };
}

export function selectEvents (eventInfos) {
  return {
    type: "SELECT_EVENTS",
    payload: eventInfos
  };
}