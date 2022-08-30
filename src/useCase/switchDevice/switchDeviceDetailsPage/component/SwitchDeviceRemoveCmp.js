import React from "react";

import FormCmp from "../../../../component/FormCmp";
import ModalDialogCmp, {useModalDialog} from "../../../../component/ModalDialogCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";
import {useNavigate} from "react-router-dom";

const SwitchDeviceRemoveCmp = ({switchDeviceId}) => {
    const REMOVE_SWITCH_DEVICE_ENDPOINT = "/api/switch-devices";
    const modalHandler = useModalDialog();
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();

    function confirmRemovingBtnOnClick() {
        const sendRequestService = new SendRequestService();
        const URL = `${REMOVE_SWITCH_DEVICE_ENDPOINT}/${switchDeviceId}`;
        sendRequestService.delete(URL)
            .then(switchDeviceRemoved)
            .catch(handleRequestError);
    }

    function switchDeviceRemoved() {
        showSuccessInfo("Switch device removed");
        navigate("/switch-devices");
    }

    function handleRequestError(error){
        showErrorInfo(httpErrorHandler(error));
    }


    return <FormCmp>
        <ButtonCmp label="Remove" color={colors.danger} onClick={() => modalHandler.showModal()}/>
        <ModalDialogCmp title="Do you want to remove this switch device?" handler={modalHandler}>
            <ButtonCmp label="Confirm" color={colors.success} onClick={confirmRemovingBtnOnClick}/>
        </ModalDialogCmp>
    </FormCmp>
}

export default SwitchDeviceRemoveCmp;