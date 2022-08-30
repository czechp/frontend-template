import React from "react";
import styled from "styled-components";

import {Table, Tbody, Td, Th, Thead, Tr} from "../../../../configuration/styledComponents/Table";
import DateConverter from "../../../../service/converter/dateConverter";
import InfoFrame from "../../../../configuration/styledComponents/InfoFrame";
import {useNavigate} from "react-router-dom";


const LocationsListCmp = ({locations, setSortingField}) => {

    return <Container>
        <Table>
            <Thead>
                <Tr>
                    <Th onClick={() => setSortingField("id")}>Id:</Th>
                    <Th onClick={() => setSortingField("name")}>Name:</Th>
                    <Th onClick={() => setSortingField("clientName")}>Client device:</Th>
                    <Th onClick={() => setSortingField("creationTimestamp")}>Creation date:</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    locations.map((location, index) => <LocationRow key={`${location.id}-${index}`}
                                                                    location={location}/>)
                }
            </Tbody>
        </Table>
        <EmptyArrayStatement locations={locations} />

    </Container>
}

const LocationRow = ({location}) => {
    const dateConverter = new DateConverter();
    const navigate = useNavigate();

    function locationRowOnClick() {
        navigate("/location-details", {state: location.id});
    }

    return <Tr onClick={locationRowOnClick}>
        <Td>{location.id}</Td>
        <Td>{location.name}</Td>
        <Td>{location.clientName || "Unassigned"}</Td>
        <Td>{dateConverter.toFullDateTime(location.creationTimestamp)}</Td>
    </Tr>
}

const EmptyArrayStatement = ({locations}) => {
    return <>
        {
            locations.length === 0 && <InfoFrame>Currently you have no locations.<br/>Add a new.</InfoFrame>
        }
    </>
}

const Container = styled.div`
  width: 100%;
`;


export default LocationsListCmp;