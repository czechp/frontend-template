import React from "react";

import FormCmp from "../../../../component/FormCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import TextInputCmp from "../../../../component/TextInputCmp";
import {FieldsValidator} from "../../../../service/validator/fieldsValidator";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const LocationAddCmp = ({
                            reloadLocations = () => {}
                        }) => {
    const ADD_LOCATION_ENDPOINT = "/api/locations";
    const MINIMUM_LENGTH_OF_NAME = 1;

    const fieldsValidator = new FieldsValidator();
    const sendRequestService = new SendRequestService();

    const modalHandler = useModalDialog();
    const [newLocationName, setNewLocationName] = React.useState("");
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);

    function showModalDialogBtnOnClick() {
        modalHandler.showModal();
    }

    function addNewLocationBtnOnClick() {
        const formsValidated = fieldsValidator.minimumLength(newLocationName, MINIMUM_LENGTH_OF_NAME);
        if (formsValidated) {
            sendRequestService.post(ADD_LOCATION_ENDPOINT, {name: newLocationName})
                .then((response) => locationAdded())
                .catch((error) => showErrorInfo(httpErrorHandler(error)));
        } else
            showErrorInfo("Check the length of location name");
    }

    function locationAdded() {
        showSuccessInfo("New location was added");
        reloadLocations();
        setNewLocationName("");
        modalHandler.hideModal();
    }

    return <FormCmp>
        <ButtonCmp label="Add new location" onClick={showModalDialogBtnOnClick}/>
        <ModalDialogCmp handler={modalHandler} title="Add a new location">
            <TextInputCmp label="Location name" value={newLocationName} onChange={setNewLocationName}
                          minLength={MINIMUM_LENGTH_OF_NAME}
                          placeholder="Type location name"/>
            <ButtonCmp label="Add a new location" color={colors.success} onClick={addNewLocationBtnOnClick}/>
        </ModalDialogCmp>
    </FormCmp>
}

export default LocationAddCmp;