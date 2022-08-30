import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

const SwitchDeviceErrorInfo = ({error}) => {
    return <>
        {error && <Container>
            <FontAwesomeIcon icon={faTriangleExclamation} size={"1x"} />
            <Text> Error. Check device.</Text>
            <FontAwesomeIcon icon={faTriangleExclamation} size={"1x"} />

        </Container>}
    </>;

}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 2rem 0;
  color: ${({theme}) => theme.colors.danger};
  font-size: xxx-large;
`;

const Text = styled.span`
    margin: 0 1rem 0 1rem;
`;

export default SwitchDeviceErrorInfo;