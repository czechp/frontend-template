import styled from "styled-components";

import InfoCardCmp from "../../../../component/InfoCardCmp";
import eventTypeConverter from "../../converter/eventTypeConverter";
import DateConverter from "../../../../service/converter/dateConverter";

const EventDetailsInfoCmp = ({event}) => {
    const dateConverter = new DateConverter();

    const data = [
        {label: "Id:", value: event.id},
        {label: "Device Id:", value: event.deviceId},
        {label: "Failed", value: event.failed ? "YES" : "NO"},
        {label: "Event type:", value: eventTypeConverter(event.deviceEvent)},
        {label: "Creation date", value: dateConverter.toFullDateTime(event.creationTimestamp)}
    ];
    return <Container>
        <Status failed={event.failed}>{event.failed ? "FAILED" : "SUCCESS"}</Status>
        <InfoCardCmp data={data}/>
    </Container>
}

const Container = styled.div`
    width: 100%;
`;

const Status = styled.div`
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: ${({failed, theme})=>failed ? theme.colors.danger : theme.colors.success };
    font-size: xxx-large;
    font-style: italic;
    
`;

export default EventDetailsInfoCmp;