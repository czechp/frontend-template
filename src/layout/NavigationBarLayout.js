import styled from "styled-components";
import {useNavigate} from "react-router-dom";


import SeparatorCmp from "../component/SeparatorCmp";
import ButtonCmp from "../component/ButtonCmp";

const NavigationBarLayout = () => {
    const BUTTON_WIDTH = 17;
    const navigate = useNavigate();

    return <>
        <Container>
            <ButtonCmp width={BUTTON_WIDTH} label={"Strona główna"} onClick={() => navigate("/")}/>
            <ButtonCmp width={BUTTON_WIDTH} label={"Użytkownicy"} onClick={() => navigate("/accounts")}/>
        </Container>
        <SeparatorCmp/>
    </>
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default NavigationBarLayout;