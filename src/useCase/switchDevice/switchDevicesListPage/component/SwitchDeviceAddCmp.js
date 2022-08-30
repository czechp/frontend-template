import React from "react";

import FormCmp from "../../../../component/FormCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import GetRequestService from "../../../../service/http/getRequestService";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import SelectFieldCmp from "../../../../component/SelectFieldCmp";
import TextInputCmp from "../../../../component/TextInputCmp";
import colors from "../../../../configuration/style/colors";
import {FieldsValidator} from "../../../../service/validator/fieldsValidator";
import {StatementContext} from "../../../../App";
import SendRequestService from "../../../../service/http/sendRequestService";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const SwitchDeviceAddCmp = ({reload}) => {
    const SWITCH_DEVICE_NAME_MIN_LENGTH = 2;
    const modalHandler = useModalDialog();
    const [selectedLocationId, setSelectedLocationId] = React.useState(0);
    const [newSwitchDeviceName, setNewSwitchDeviceName] = React.useState("");
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);


    function createBtnOnClick() {
        const fieldsValidator = new FieldsValidator();
        const locationIdValidated = selectedLocationId !== 0;
        const nameValidated = fieldsValidator.minimumLength(newSwitchDeviceName, SWITCH_DEVICE_NAME_MIN_LENGTH);
        const formValidated = locationIdValidated && nameValidated;

        if (formValidated) sendCreateRequest()
        else showErrorInfo("Check correctness of fields");
    }

    function sendCreateRequest() {
        const CREATE_SWITCH_DEVICE_ENDPOINT = "/api/switch-devices";
        const sendRequestService = new SendRequestService();
        const requestBody = {locationId: selectedLocationId, name: newSwitchDeviceName};
        sendRequestService.post(CREATE_SWITCH_DEVICE_ENDPOINT, requestBody)
            .then((response) => switchDeviceCreated())
            .catch((error) => showErrorInfo(httpErrorHandler(error)))
    }

    function switchDeviceCreated() {
        showSuccessInfo("Switch device created");
        modalHandler.hideModal();
        reload();
    }

    return <FormCmp>
        <ButtonCmp label="Add switch device" onClick={modalHandler.showModal}/>
        <ModalDialogCmp handler={modalHandler} title="Add new switch device">
            <TextInputCmp value={newSwitchDeviceName} onChange={setNewSwitchDeviceName} label={"Name:"}
                          minLength={SWITCH_DEVICE_NAME_MIN_LENGTH} placeholder="Type switch device name"/>
            <LocationSelectInputCmp selectedLocationId={selectedLocationId} setSelectedLocationId={setSelectedLocationId} />
            <ButtonCmp label="Create" color={colors.success} onClick={createBtnOnClick}/>
        </ModalDialogCmp>
    </FormCmp>
};


const LocationSelectInputCmp = ({selectedLocationId, setSelectedLocationId}) => {
    const LOCATIONS_ENDPOINT = "/api/locations/account";
    const getRequestService = new GetRequestService();
    const {objects: locations} = getRequestService.getObjectsArray(LOCATIONS_ENDPOINT);
    const locationSelectValue = useLocationSelectValue(locations);


    React.useEffect(() => {
        if (locationSelectValue.length > 0)
            setSelectedLocationId(locationSelectValue[0].value);
    }, [locationSelectValue]);

    return <SelectFieldCmp label="Select location:" value={selectedLocationId} options={locationSelectValue}
                           onChange={setSelectedLocationId}/>
}

function useLocationSelectValue(locations) {
    const [locationSelectValue, setLocationSelectValue] = React.useState([]);

    React.useEffect(() => {
        if (locations) {
            setLocationSelectValue(locations.map((location) => ({label: location.name, value: location.id})));
        } else
            setLocationSelectValue([]);
    }, [locations]);

    return locationSelectValue;
}

export default SwitchDeviceAddCmp;