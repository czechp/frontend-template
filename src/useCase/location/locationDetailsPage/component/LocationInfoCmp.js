import InfoCardCmp from "../../../../component/InfoCardCmp";
import DateConverter from "../../../../service/converter/dateConverter";

const LocationInfoCmp = ({location}) => {
    const dateConverter = new DateConverter();

    const locationData = [
        {label: "Id:", value: location.id},
        {label: "Name:", value: location.name},
        {label: "Client name:", value: location.clientName || "Unassigned"},
        {label: "Client UUID:", value: location.clientUUID || "Unassigned"},
        {label: "Creation date:", value: dateConverter.toFullDateTime(location.creationTimestamp)}
    ];

    return <InfoCardCmp data={locationData}/>
}

export default LocationInfoCmp;

