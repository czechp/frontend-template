import InfoCardCmp from "../../../../component/InfoCardCmp";
import switchDeviceStateConverter from "../../converter/switchDeviceStateConverter";
import DateConverter from "../../../../service/converter/dateConverter";
import colorByStateProvider from "../../utlis/colorByStateProvider";

const SwitchDeviceInfoCmp = ({switchDevice}) => {
    const dateConverter = new DateConverter();

    const data = [
        {label: "Id:", value: switchDevice.id},
        {label: "Name:", value: switchDevice.name},
        {label: "Location:", value: switchDevice.location.name},
        {label: "Expected state", value: switchDeviceStateConverter(switchDevice.expectedState)},
        {label: "Current state:", value: switchDeviceStateConverter(switchDevice.state)},
        {label: "Device error:", value: switchDevice.deviceError ? "YES" : "NO"},
        {label: "Creation date:", value: dateConverter.toFullDateTime(switchDevice.creationTimestamp)},
        {label: "Last state changing:", value: dateConverter.toFullDateTime(switchDevice.lastSetCmd)},
        {label: "Last feedback from device:", value: dateConverter.toFullDateTime(switchDevice.lastDeviceFeedback)},
    ];

    return <InfoCardCmp data={data}/>
}

export default SwitchDeviceInfoCmp;