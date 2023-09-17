import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
import { Background } from "../component/background";
//import Login from "../pages/Login.js";
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Background></Background>
		</>

	);
};
