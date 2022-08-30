import PageCmp from "../../../component/PageCmp";
import GetRequestService from "../../../service/http/getRequestService";
import LocationsListCmp from "./component/LocationsListCmp";
import LocationAddCmp from "./component/LocationAddCmp";

const LocationsListPage = () => {
    const LOCATIONS_ENDPOINT = "/api/locations/account";
    const getRequestService = new GetRequestService();
    const {objects: locations, setSortingField, reloadRequest} = getRequestService.getObjectsArray(LOCATIONS_ENDPOINT);


    return <PageCmp title="Locations" loaded={locations}>
        {
            locations && <>
                <LocationAddCmp reloadLocations={reloadRequest} />
                <LocationsListCmp locations={locations} setSortingField={setSortingField} />
            </>
        }
    </PageCmp>
}

export default LocationsListPage;

