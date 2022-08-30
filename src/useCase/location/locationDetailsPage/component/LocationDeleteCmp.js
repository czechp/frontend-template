import React from "react";

import FormCmp from "../../../../component/FormCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import {useNavigate} from "react-router-dom";

const LocationDeleteCmp = ({locationId}) => {
    const LOCATION_REMOVE_ENDPOINT = "/api/locations";

    const sendRequestService = new SendRequestService();
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();

    const modalHandler = useModalDialog();

    function showModalBtnOnClick() {
        modalHandler.showModal();
    }

    function removeLocationBtnOnClick() {
        sendRequestService.delete(`${LOCATION_REMOVE_ENDPOINT}/${locationId}`)
            .then((response) => locationRemoved())
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function locationRemoved() {
        showSuccessInfo("Location removed");
        navigate("/locations");
    }

    return <FormCmp>
        <ButtonCmp label="Remove" color={colors.danger} onClick={showModalBtnOnClick}/>
        <ModalDialogCmp handler={modalHandler} title="Do you want to remove this location?">
            <ButtonCmp label="Confirm" color={colors.success} onClick={removeLocationBtnOnClick}/>
        </ModalDialogCmp>

    </FormCmp>
}

export default LocationDeleteCmp;