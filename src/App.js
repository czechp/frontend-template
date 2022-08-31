import React from "react";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import theme from "./configuration/style/theme";
import GlobalStyles from "./configuration/style/globalStyles";
import ContainerLayout, {StickyTopContainer} from "./layout/ContainerLayout";
import TopBarLayout from "./layout/TopBarLayout";
import NavigationBarLayout from "./layout/NavigationBarLayout";
import LoginPage from "./useCase/login/loginPage/LoginPage";
import {createStatementContext, useProvideStatementValues} from "./context/useStatementContext";
import LoginRequirementPage from "./useCase/warningPages/LoginRequirementPage";
import RegisterPage from "./useCase/register/registerPage/RegisterPage";
import ActivateAccountPage from "./useCase/register/activeAccountPage/ActivateAccountPage";
import StatementCmp from "./component/StatementCmp";
import AdminRequirementPage from "./useCase/warningPages/AdminRequirementPage";
import AdminGuard from "./guard/AdminGuard";
import AccountsListPage from "./useCase/account/accountsListPage/AccountsListPage";
import AccountDetailsPage from "./useCase/account/accountDetailsPage/AccountDetailsPage";
import HomePage from "./useCase/home/HomePage";
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
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/register" element={<RegisterPage/>}/>
                            <Route path="/restore-password-demand" element={<RestorePasswordDemandPage/>}/>
                            <Route path="/restore-password-token" element={<RestorePasswordApplyTokenPage/>}/>
                            <Route path="/activate-account" element={<ActivateAccountPage/>}/>
                            <Route path="/accounts" element={<AdminGuard><AccountsListPage/></AdminGuard>}/>
                            <Route path="/account-details" element={<AdminGuard><AccountDetailsPage/></AdminGuard>}/>
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
