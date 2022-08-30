import React from "react";
import styled from "styled-components";
import {
    faCalendarCheck,
    faCalendarXmark,
    faHouseSignal,
    faLocationCrosshairs,
    faPowerOff,
    faUser
} from "@fortawesome/free-solid-svg-icons";


import PageCmp from "../../component/PageCmp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoaded(true), 800);
    }, []);

    return <PageCmp title="Strona główna" loaded={loaded}>
        <Container>
            <TileCmp path="/" title={"Strona główna"} icon={faHouseSignal}/>
            <TileCmp path="/accounts" title={"Użytkownicy"} icon={faUser}/>
        </Container>
    </PageCmp>
}

const TileCmp = ({title, icon, path}) => {
    const navigate = useNavigate();
    return <Tile onClick={() => navigate(path)}>
        <TileHeader>{title}</TileHeader>
        <FontAwesomeIcon icon={icon} size={"5x"}/>
    </Tile>
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const Tile = styled.div`
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 10px;
  width: 15%;
  height: 25vh;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.faded}
  }
`;

const TileHeader = styled.h3`
    margin: 0 0 2rem 0;
`;

export default HomePage;