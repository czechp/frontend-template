import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouseSignal} from "@fortawesome/free-solid-svg-icons";

import SeparatorCmp from "../component/SeparatorCmp";
import LoginInfoCmp from "../component/LoginInfoCmp";

const TopBarLayout = () => {
    return <>
        <Container>
            <LogoContainer>
                <FontAwesomeIcon icon={faHouseSignal} size={"3x"}/>
                <Logo>
                    <LogoHeader>PCzech</LogoHeader>
                    <LogoSubheader>Building <br/>Automation</LogoSubheader>
                </Logo>
            </LogoContainer>
            <LoginInfoCmp/>
        </Container>
        <SeparatorCmp/>
    </>
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoHeader = styled.h1`
  margin-top: 10px;
  margin-bottom: 0px;
`

const LogoSubheader = styled.h6`
  margin-top: 5px;
  margin-bottom: 5px;
`

const Logo = styled.div``
export default TopBarLayout;