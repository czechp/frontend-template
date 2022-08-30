import SwitchDevicesListCmp from "../../../switchDevice/switchDevicesListPage/component/SwitchDevicesListCmp";
import FormCmp from "../../../../component/FormCmp";

const LocationSwitchDevicesCmp = ({switchDevices, setSortingField}) => {
    return <FormCmp title="Switch devices">
        <SwitchDevicesListCmp switchDevices={switchDevices} setSortingField={setSortingField} />
    </FormCmp>
}

export  default LocationSwitchDevicesCmp;