import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import EventsListCmp from "./component/EventsListCmp";

const EventsListPage = () => {
    const EVENTS_ENDPOINT = "/api/device-events/account";
    const getRequestService = new GetRequestService();
    const {objects: events, setSortingField, reloadRequest} = getRequestService.getObjectsArray(EVENTS_ENDPOINT);

    return <PageCmp title="Events list" loaded={events}>
        {events && <>
            <EventsListCmp events={events} setSortingField={setSortingField} />
        </>}
    </PageCmp>
}

export default EventsListPage;