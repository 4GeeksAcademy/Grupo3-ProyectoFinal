import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import CreateQuotation from "./pages/CreateQuotation";
import {ListQuotations} from "./pages/ListQuotations";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPasswordRequest from "./pages/ResetPasswordRequest";
import { CreateProject } from "./pages/createProject";
import { EditProject } from "./pages/editProject";
import { ListProject } from "./pages/listProject";
import injectContext from "./store/appContext";

//create your first component here
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    {/* <Navbar /> */}
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<CreateQuotation/>} path="/quotation/create"/>
                        <Route element={<ListQuotations/>} path="/quotation/list"/>
                        <Route element={<Register />} path="/register" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<ResetPasswordRequest />} path="/reset_password_request" />
                        <Route element={<CreateQuotation/>} path="/user/client/quotation/create"/>
                        <Route element={<CreateProject />} path="/createProject" />
                        <Route element={<EditProject />} path="/editProject:id" />
                        <Route element={<ListProject />} path="/listProject" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    {/* <Footer /> */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
