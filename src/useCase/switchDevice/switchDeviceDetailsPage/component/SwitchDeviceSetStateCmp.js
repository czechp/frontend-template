import React from "react";
import styled from "styled-components";

import colorByStateProvider from "../../utlis/colorByStateProvider";
import ButtonCmp from "../../../../component/ButtonCmp";
import colors from "../../../../configuration/style/colors";
import FormCmp from "../../../../component/FormCmp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const SwitchDeviceSetStateCmp = ({switchDevice, reloadRequest}) => {
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const color = colorByStateProvider(switchDevice.state);
    const buttonStyle = {
        height: "5vh"
    }

    function setStateBtnOnClick(state) {
        sendSetStateRequest(state);
    }

    function sendSetStateRequest(state) {
        const SET_STATE_ENDPOINT = "/api/switch-devices/new-state";
        const sendRequestService = new SendRequestService();
        const requestBody = {switchDeviceId: switchDevice.id, newState: state};
        sendRequestService.patch(SET_STATE_ENDPOINT, requestBody)
            .then(stateChanged)
            .catch(handlerRequestError);
    }

    function stateChanged() {
        showSuccessInfo("State changed");
        reloadRequest();
    }

    function handlerRequestError(error) {
        showErrorInfo(httpErrorHandler(error));
    }

    return <FormCmp title="Set state:">
        <InfoSection stateColor={color}>
            <InfoText>Current state:</InfoText>
            <FontAwesomeIcon icon={faPowerOff} size={"3x"}/>
        </InfoSection>

        <ButtonSection>
            <ButtonCmp label="ON" color={colors.success} width={45} style={buttonStyle}
                       onClick={() => setStateBtnOnClick(true)}/>
            <ButtonCmp label="OFF" color={colors.off} width={45} style={buttonStyle}
                       onClick={() => setStateBtnOnClick(false)}/>
        </ButtonSection>
    </FormCmp>
}

const InfoSection = styled.div`
  color: ${({stateColor}) => stateColor};
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.h4`
  margin-bottom: 1rem;
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export default SwitchDeviceSetStateCmp;