function eventTypeConverter(eventType) {
    switch (eventType) {
        case "CREATE" :
            return "Create";
        case "DELETE" :
            return "Delete";
        case "NEW_STATE_REQUEST" :
            return "Set new state";
        case "FEEDBACK_FROM_DEVICE" :
            return "New state confirmed";
        default:
            return "Not recognized";
    }
}

export default eventTypeConverter;