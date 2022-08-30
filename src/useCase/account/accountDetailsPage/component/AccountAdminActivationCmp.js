import React from "react";
import styled from "styled-components";

import FormCmp from "../../../../component/FormCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import {StatementContext} from "../../../../App";
import SendRequestService from "../../../../service/http/sendRequestService";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const AccountAdminActivationCmp = ({accountId, reloadAccount}) => {
    const ACTIVATION_ENDPOINT = "/api/accounts/admin-activation";
    const sendRequestService = new SendRequestService();
    const {showSuccessInfo, showErrorInfo} = React.useContext(StatementContext);

    function activationBtnOnClick() {
        sendActivationRequest(true);
    }

    function deactivationBtnOnClick() {
        sendActivationRequest(false);
    }

    function activationUpdated(activate) {
        reloadAccount();
        showSuccessInfo(`Account ${activate ? "activated" : "deactivated"}`);
    }

    function sendActivationRequest(activate) {
        const params = [{activation: activate}];
        sendRequestService.patch(`${ACTIVATION_ENDPOINT}/${accountId}`, {}, params)
            .then((response) => activationUpdated(activate))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    return <FormCmp title="Admin activation">
        <Container>
            <ButtonCmp label="Activate" style={{width: "45%"}} color={colors.success} onClick={activationBtnOnClick}/>
            <ButtonCmp label="Deactivate" style={{width: "45%"}} color={colors.danger}
                       onClick={deactivationBtnOnClick}/>
        </Container>
    </FormCmp>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default AccountAdminActivationCmp;