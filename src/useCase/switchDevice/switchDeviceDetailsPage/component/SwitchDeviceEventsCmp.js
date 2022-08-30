import FormCmp from "../../../../component/FormCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import GetRequestService from "../../../../service/http/getRequestService";
import EventsListCmp from "../../../event/eventsListPage/component/EventsListCmp";

const SwitchDeviceEventsCmp = ({switchDeviceId}) => {
    const EVENT_BY_SWITCH_DEVICE_ENDPOINT = "/api/device-events/device";
    const getRequestService = new GetRequestService();
    const modalHandler = useModalDialog();
    const {objects: events, setSortingField} = getRequestService.getObjectsArray(`${EVENT_BY_SWITCH_DEVICE_ENDPOINT}/${switchDeviceId}`);

    console.log(events);
    return <FormCmp>
        <ButtonCmp label="Events" onClick={() => modalHandler.showModal()}/>
        <ModalDialogCmp title="Events of switch device" handler={modalHandler}>
            {
                events && <>
                    <EventsListCmp events={events} setSortingField={setSortingField} />
                </>
            }
        </ModalDialogCmp>
    </FormCmp>
}

export default SwitchDeviceEventsCmp;