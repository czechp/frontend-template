import React from "react";
import styled from "styled-components";

import InfoPageCmp from "../../component/InfoPageCmp";

const AdminRequirementPage = () => {
    return <InfoPageCmp error title="Access denied">
        <Text>Access only for admin users.</Text>
    </InfoPageCmp>
}

const Text = styled.p`
`;

export default AdminRequirementPage;