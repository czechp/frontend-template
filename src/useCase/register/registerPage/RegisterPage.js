import React from "react";
import {useNavigate} from "react-router-dom";


import PageCmp from "../../../component/PageCmp";
import FormCmp from "../../../component/FormCmp";
import TextInputCmp from "../../../component/TextInputCmp";
import ButtonCmp from "../../../component/ButtonCmp";
import {StatementContext} from "../../../App";
import SendRequestService from "../../../service/http/sendRequestService";
import httpErrorHandler from "../../../service/http/httpErrorHandler";
import useRegisterFormField from "./forms/useRegisterPageFieldsProvider";
import registerPageValidator from "./validator/registerPageValidator";

const RegisterPage = () => {
    const REGISTER_ENDPOINT = "/api/accounts";

    const {showErrorInfo, showSuccessInfo} = React.useContext(StatementContext);
    const navigate = useNavigate();

    const formFields = useRegisterFormField();


    function registerSuccess(activationCode) {
        navigate(`/activate-account`, {state: activationCode})
        showSuccessInfo("Account created");
    }

    function sendRegisterRequest() {
        const sendRequestService = new SendRequestService();

        const requestBody = {
            username: formFields.username,
            email: formFields.email,
            password: formFields.password,
            passwordConfirm: formFields.passwordConfirm
        };

        sendRequestService.post(REGISTER_ENDPOINT, requestBody)
            .then((response) => registerSuccess(response.data))
            .catch((error) => showErrorInfo(httpErrorHandler(error)));
    }

    function registerBtnOnClick() {
        const validatorList = registerPageValidator(formFields);

        if (!validatorList.length)
            sendRegisterRequest();
        else
            validatorList.forEach((v) => showErrorInfo(v));

    }

    return <PageCmp title="Register">
        <FormCmp>
            <TextInputCmp label={"Username:"} value={formFields.username} onChange={formFields.setUsername}
                          minLength={3} placeholder="Type username"/>
            <TextInputCmp label={"Email:"} value={formFields.email} onChange={formFields.setEmail} minLength={3}
                          placeholder="Type email"/>
            <TextInputCmp label={"Password:"} value={formFields.password} onChange={formFields.setPassword}
                          minLength={3} placeholder="Type password" type="password"/>
            <TextInputCmp label={"Password confirmation:"} value={formFields.passwordConfirm}
                          onChange={formFields.setPasswordConfirm} minLength={3} placeholder="Confirm password"
                          type="password"/>
            <ButtonCmp label="Register" onClick={registerBtnOnClick}/>
        </FormCmp>
    </PageCmp>
}


export default RegisterPage;