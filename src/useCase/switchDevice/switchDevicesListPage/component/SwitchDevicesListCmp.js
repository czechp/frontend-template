import styled from "styled-components";
import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";
import switchDeviceStateConverter from "../../converter/switchDeviceStateConverter";
import InfoFrame from "../../../../configuration/styledComponents/InfoFrame";
import colors from "../../../../configuration/style/colors";
import ColorExplanationCmp from "../../../../component/ColorExplanationCmp";
import {useNavigate} from "react-router-dom";

const SwitchDevicesListCmp = ({switchDevices, setSortingField}) => {

    const colorExplanation = [
        {label: "ON", color: colors.success},
        {label: "OFF", color: colors.off},
        {label: "ERROR", color: colors.danger},
    ];

    return <Container>
        <ColorExplanationCmp data={colorExplanation}/>
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => setSortingField("id")}>Id:</Th>
                    <Th onClick={() => setSortingField("name")}>Name:</Th>
                    <Th onClick={() => setSortingField("locationSimpleEntity_name")}>Location:</Th>
                    <Th onClick={() => setSortingField("expectedState")}>Expected state:</Th>
                    <Th onClick={() => setSortingField("state")}>Current state:</Th>
                    <Th onClick={() => setSortingField("deviceError")}>Device error:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {switchDevices.map((device, index) => <SwitchDeviceRow key={`${device.id}-${index}`}
                                                                       switchDevice={device}/>)}
            </Tbody>
        </Table>
        {switchDevices.length === 0 && <InfoFrame>Currently you have no switch devices. <br/> Add a new.</InfoFrame>}
    </Container>
}

const SwitchDeviceRow = ({switchDevice}) => {
    const navigate = useNavigate();

    function determineStateColor() {
        if (switchDevice.deviceError)
            return colors.danger;
        else if (switchDevice.state)
            return colors.success;
        else
            return colors.off;
    }

    function trOnClick() {
        navigate("/switch-device-details", {state: switchDevice.id});
    }

    return <TrDevice onClick={trOnClick} state={determineStateColor()}>
        <Td>{switchDevice.id}</Td>
        <Td>{switchDevice.name}</Td>
        <Td>{switchDevice.location.name}</Td>
        <Td>{switchDeviceStateConverter(switchDevice.expectedState)}</Td>
        <Td>{switchDeviceStateConverter(switchDevice.state)}</Td>
        <Td>{switchDevice.deviceError ? "YES" : "NO"}</Td>
    </TrDevice>
}


const Container = styled.div`
  width: 100%;
`;


const TrDevice = styled(Tr)`
  border-left: 20px solid ${({state}) => state};
`;

export default SwitchDevicesListCmp;