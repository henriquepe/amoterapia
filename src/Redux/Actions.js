export function openLibraryDrawer (setLibraryDrawer) {
    return {
        type: 'OPEN_LIBRARY_DRAWER',
        payload: setLibraryDrawer
    }
}

export function hideMeetingDrawer (setContentShare) {
    return {
        type: 'HIDE_MEETING_DRAWER',
        payload: setContentShare
    }
}