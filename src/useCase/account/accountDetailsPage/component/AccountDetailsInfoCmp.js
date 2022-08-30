import styled from "styled-components";
import InfoCardCmp from "../../../../component/InfoCardCmp";
import AccountRoleConverter from "../../../../service/converter/accountRoleConverter";
import DateConverter from "../../../../service/converter/dateConverter";

const AccountDetailsInfoCmp = ({account}) => {
    const accountRoleConverter = new AccountRoleConverter();
    const dateConverter = new DateConverter();

    function createConfirmationText(status) {
        return status ? "Yes" : "No";
    }

    const accountInfo = [
        {label: "Id:", value: account.id},
        {label: "Username:", value: account.username},
        {label: "Email:", value: account.email},
        {label: "Role:", value: accountRoleConverter.toText(account.role)},
        {label: "Creation date:", value: dateConverter.toFullDateTime(account.creationTimestamp)},
        {label: "Email confirmed:", value: createConfirmationText(account.emailConfirmed)},
        {label: "Admin confirmed:", value: createConfirmationText(account.adminActivated)}
    ]
    return <Container>
        <InfoCardCmp data={accountInfo}/>
    </Container>
}

const Container = styled.div`
  width: 100%;
`;

export default AccountDetailsInfoCmp;
