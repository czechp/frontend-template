import PageCmp from "../../../component/PageCmp";
import {useLocation} from "react-router-dom";
import GetRequestService from "../../../service/http/getRequestService";
import convertEventSummary from "../converter/eventSummaryConverter";
import EventDetailsInfoCmp from "./component/EventDetailsInfoCmp";

const EventDetailsPage = () => {
    const EVENT_ENDPOINT = "/api/device-events";
    const {state: eventId} = useLocation();
    const getRequestService = new GetRequestService();
    const {object: event, reloadRequest} = getRequestService.getObject(`${EVENT_ENDPOINT}/${eventId}`);

    return <PageCmp title="Event details" loaded={event}>
        {
            event && <>
                <EventDetailsInfoCmp event={event} />
            </>
        }
    </PageCmp>
}

export default EventDetailsPage;