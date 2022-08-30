import React from "react";
import {useLocation} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import LocationInfoCmp from "./component/LocationInfoCmp";
import LocationDeleteCmp from "./component/LocationDeleteCmp";
import LocationSwitchDevicesCmp from "./component/LocationSwitchDevicesCmp";

const LocationDetailsPage = () => {
    const LOCATION_ENDPOINT = "/api/locations";
    const SWITCH_DEVICES_ENDPOINT = "/api/switch-devices/location";
    const getRequestService = new GetRequestService();
    const {state: locationId} = useLocation();
    const {object: location} = getRequestService.getObject(`${LOCATION_ENDPOINT}/${locationId}`);
    const {
        objects: switchDevices,
        setSortingField: setSwitchDevicesSortingField
    } = getRequestService.getObjectsArray(`${SWITCH_DEVICES_ENDPOINT}/${locationId}`);

    return <PageCmp title="Location details" loaded={location}>
        {
            location && <>
                <LocationInfoCmp location={location} />
                {switchDevices && <LocationSwitchDevicesCmp switchDevices={switchDevices} setSortingField={setSwitchDevicesSortingField} />}
                <LocationDeleteCmp locationId={location.id} />

            </>
        }
    </PageCmp>
}

export default LocationDetailsPage;