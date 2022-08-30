import React from "react";
import styled from "styled-components";

import FormCmp from "../../../../component/FormCmp";
import ButtonCmp from "../../../../component/ButtonCmp";
import SelectFieldCmp from "../../../../component/SelectFieldCmp";
import {ACCOUNT_ROLES} from "../../../../constant/ACCOUNT_ROLES";
import SendRequestService from "../../../../service/http/sendRequestService";
import {StatementContext} from "../../../../App";
import httpErrorHandler from "../../../../service/http/httpErrorHandler";

const AccountChangeRoleCmp = ({account, reloadAccount}) => {
    const CHANGE_ROLE_ENDPOINT = "/api/accounts/role";
    const sendRequestService = new SendRequestService();
    const [accountRole, setAccountRole] = React.useState(account.role);
    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);

    function changeRoleBtnOnClick() {
        sendRequestService.patch(`${CHANGE_ROLE_ENDPOINT}/${account.id}`, {}, [{role: accountRole}])
            .then((response) => changeRoleSuccess())
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function changeRoleSuccess() {
        const currentAccountRole = ACCOUNT_ROLES.find((role) => role.value === accountRole).label;
        showSuccessInfo("Account role changed to " + currentAccountRole);
        reloadAccount();
    }

    return <FormCmp title="Change role">
        <Container>
            <SelectFieldCmp value={accountRole} onChange={setAccountRole} options={ACCOUNT_ROLES} width={45}/>
            <ButtonCmp label="Change role" width={45} onClick={changeRoleBtnOnClick}/>
        </Container>
    </FormCmp>
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default AccountChangeRoleCmp;