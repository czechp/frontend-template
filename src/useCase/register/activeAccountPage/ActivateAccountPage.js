import React from "react";
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";

import PageCmp from "../../../component/PageCmp";
import FormCmp from "../../../component/FormCmp";
import TextInputCmp from "../../../component/TextInputCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import activationCodeFieldValidator from "./validator/activationCodeFieldValidator";
import {StatementContext} from "../../../App";
import UUID_LENGTH from "../../../constant/UUID";
import SendRequestService from "../../../service/http/sendRequestService";
import httpErrorHandler from "../../../service/http/httpErrorHandler";

const ActivateAccountPage = () => {
    const {state: activationCode} = useLocation();


    return <PageCmp title="Activate account">
        <DevelopmentSection activationCode={activationCode}/>
        <ActivationForm activationCode={activationCode}/>
    </PageCmp>
}

const DevelopmentSection = ({activationCode}) => {
    return <>
        {activationCode && <DevelopmentContainer>
            It's a development mode your activation code will fill automatically.
            <hr/>
        </DevelopmentContainer>}
    </>
}

const ActivationForm = ({activationCode: myActivationCode}) => {
    const ACTIVATION_ENDPOINT = "/api/accounts/email-confirmation";
    const [activationCode, setActivationCode] = React.useState(myActivationCode || "");
    const navigate = useNavigate();

    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);

    function activationSuccess() {
        showSuccessInfo("Account activation success. Now wait for admin confirmation.");
        navigate("/login");
    }

    function sendActivationRequest() {
        const sendRequestService = new SendRequestService();
        sendRequestService.patch(ACTIVATION_ENDPOINT, {}, [{token: activationCode}])
            .then((response) => activationSuccess())
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function activationBtnOnClick() {
        if (activationCodeFieldValidator(activationCode))
            sendActivationRequest();
        else
            showErrorInfo("Your activation code has to have 36 characters")
    };

    return <FormCmp>
        <TextInputCmp label="Activation code:"
                      value={activationCode}
                      onChange={setActivationCode}
                      placeholder="Type your activation code from email message"
                      minLength={UUID_LENGTH}
        />
        <ButtonCmp label="Activate account" onClick={activationBtnOnClick}/>
    </FormCmp>
}

const DevelopmentContainer = styled.div`
  color: ${({theme}) => theme.colors.primary};
  font-size: 20px;
  font-style: italic;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`


export default ActivateAccountPage;