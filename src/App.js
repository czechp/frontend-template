import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import theme from "./configuration/style/theme";
import GlobalStyles from "./configuration/style/globalStyles";
import ContainerLayout, {StickyTopContainer} from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import NavigationBarLayout from "./layout/NavigationBarLayout";
import LocationsListPage from "./useCase/location/locationsListPage/LocationsListPage";
import LoginPage from "./useCase/login/loginPage/LoginPage";
import {createStatementContext, useProvideStatementValues} from "./context/useStatementContext";
import LoginRequirementPage from "./useCase/warningPages/LoginRequirementPage";
import LoginGuard from "./guard/LoginGuard";
import RegisterPage from "./useCase/register/registerPage/RegisterPage";
import ActivateAccountPage from "./useCase/register/activeAccountPage/ActivateAccountPage";
import StatementCmp from "./component/StatementCmp";
import AdminRequirementPage from "./useCase/warningPages/AdminRequirementPage";
import AdminGuard from "./guard/AdminGuard";
import AccountsListPage from "./useCase/account/accountsListPage/AccountsListPage";
import AccountDetailsPage from "./useCase/account/accountDetailsPage/AccountDetailsPage";
import LocationDetailsPage from "./useCase/location/locationDetailsPage/LocationDetailsPage";
import SwitchDevicesListPage from "./useCase/switchDevice/switchDevicesListPage/SwitchDevicesListPage";
import HomePage from "./useCase/home/HomePage";
import SwitchDeviceDetailsPage from "./useCase/switchDevice/switchDeviceDetailsPage/SwitchDeviceDetailsPage";
import EventsListPage from "./useCase/event/eventsListPage/EventsListPage";
import EventDetailsPage from "./useCase/event/eventsDetailsPage/EventDetailsPage";
import RestorePasswordDemandPage from "./useCase/account/restorePasswordDemandPage/RestorePasswordDemandPage";
import RestorePasswordApplyTokenPage
    from "./useCase/account/restorePasswordApplyTokenPage/RestorePasswordApplyTokenPage";

export const StatementContext = createStatementContext();

function App() {
    const statementContextValue = useProvideStatementValues();


    return (<div className="App">
        <ThemeProvider theme={theme}>
            <GlobalStyles/>

            <StatementContext.Provider value={statementContextValue}>
                <BrowserRouter>
                    <ContainerLayout>
                        <StickyTopContainer>
                            <TopBarLayout/>
                            <NavigationBarLayout/>
                        </StickyTopContainer>
                        <Routes>
                            <Route path="/" element={<LoginGuard><HomePage/></LoginGuard>}/>
                            <Route path="/locations" element={<LoginGuard><LocationsListPage/></LoginGuard>}/>
                            <Route path="/location-details" element={<LoginGuard><LocationDetailsPage/></LoginGuard>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/restore-password-demand" element={<RestorePasswordDemandPage />} />
                            <Route path="/restore-password-token" element={<RestorePasswordApplyTokenPage />} />
                            <Route path="/activate-account" element={<ActivateAccountPage/>}/>
                            <Route path="/accounts" element={<AdminGuard><AccountsListPage/></AdminGuard>}/>
                            <Route path="/account-details" element={<AdminGuard><AccountDetailsPage/></AdminGuard>}/>
                            <Route path="/switch-devices" element={<LoginGuard><SwitchDevicesListPage/></LoginGuard>}/>
                            <Route path="/switch-device-details"
                                   element={<LoginGuard><SwitchDeviceDetailsPage/></LoginGuard>}/>
                            <Route path="/events" element={<LoginGuard><EventsListPage/></LoginGuard>}/>
                            <Route path="/event-details" element={<LoginGuard><EventDetailsPage/></LoginGuard>} />
                            <Route path="/not-logged" element={<LoginRequirementPage/>}/>
                            <Route path="/admin-access" element={<AdminRequirementPage/>}/>
                        </Routes>

                    </ContainerLayout>
                </BrowserRouter>
                <StatementCmp/>
            </StatementContext.Provider>
        </ThemeProvider>


    </div>);
}

export default App;
