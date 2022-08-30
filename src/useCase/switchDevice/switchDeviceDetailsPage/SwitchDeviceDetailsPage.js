import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import SwitchDeviceInfoCmp from "./component/SwitchDeviceInfoCmp";
import SwitchDeviceRemoveCmp from "./component/SwitchDeviceRemoveCmp";
import SwitchDeviceErrorInfo from "./component/SwitchDeviceErrorInfo";
import SwitchDeviceSetStateCmp from "./component/SwitchDeviceSetStateCmp";
import SwitchDeviceEventsCmp from "./component/SwitchDeviceEventsCmp";

const SwitchDeviceDetailsPage = () => {
    const SWITCH_DEVICE_ENDPOINT = "/api/switch-devices";
    const getRequestService = new GetRequestService();
    const {state: switchDeviceId} = useLocation();
    const {
        object: switchDevice,
        reloadRequest
    } = getRequestService.getObject(`${SWITCH_DEVICE_ENDPOINT}/${switchDeviceId}`);

    return <PageCmp title="Switch device details" loaded={switchDevice}>
        {switchDevice && <>
            <SwitchDeviceErrorInfo error={switchDevice.deviceError}/>
            <SwitchDeviceSetStateCmp switchDevice={switchDevice} reloadRequest={reloadRequest} />
            <SwitchDeviceInfoCmp switchDevice={switchDevice}/>
            <SwitchDeviceEventsCmp switchDeviceId={switchDevice.id}/>
            <SwitchDeviceRemoveCmp switchDeviceId={switchDevice.id}/>
        </>}
    </PageCmp>;
}

export default SwitchDeviceDetailsPage;