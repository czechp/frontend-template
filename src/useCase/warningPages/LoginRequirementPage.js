import styled from "styled-components";

import InfoPageCmp from "../../component/InfoPageCmp";
import ButtonCmp from "../../component/ButtonCmp";
import {useNavigate} from "react-router-dom";

const LoginRequirementPage = () => {
    const navigate = useNavigate();

    return <InfoPageCmp title="Access denied" error={true}>
        <Text> In order to get access this page have to login in.</Text>
        <ButtonCmp label="Login" width={"50"} onClick={() => navigate("/login")}/>
    </InfoPageCmp>
}

const Text = styled.p`
  text-align: center;
`;

export default LoginRequirementPage;

