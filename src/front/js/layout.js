import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import Home from "./pages/home";
import CreateQuotation from "./pages/CreateQuotation";
import { ListQuotations } from "./pages/ListQuotations";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ResetPasswordRequest from "./pages/ResetPasswordRequest";
import ResetPasswordToken from "./pages/ResetPasswordToken";
import { CreateProject } from "./pages/createProject";
import { EditProject } from "./pages/editProject";
import { ListProject } from "./pages/listProject";
import { ClientList } from "./pages/clientList";
//import { ClientInfo } from "./pages/clientInfo";
//import { EditInfo } from "./pages/editInfo";
//import { AddClient } from "./pages/addClient";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer";
import Nosotros from "./pages/Nosotros";

//create your first component here
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    
                    <Routes>
                        {/* <Route element={<Home />} path="/" /> */}
                        <Route element={<Home />} path="/" />
                        <Route element={<CreateQuotation />} path="/quotation/create" />
                        <Route element={<ListQuotations />} path="/quotation/list" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Nosotros />} path="/nosotros" />

                        <Route element={<ResetPasswordRequest />} path="/reset_password_request" />
                        <Route element={<ResetPasswordToken />} path="/update-password" />
                        <Route element={<CreateProject />} path="/createProject" />
                        <Route element={<EditProject />} path="/editProject/:id" />.
                        <Route element={<ListProject />} path="/listProject" />
                        <Route element={<ClientList />} path="/clientList" />
                        {/* <Route element={<AddClient />} path="/addclient" />  */}
                        {/* <Route element={<ClientInfo />} path="/clientInfo" /> */}
                        {/* <Route element={<EditInfo />} path="/editInfo" />   */}
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
