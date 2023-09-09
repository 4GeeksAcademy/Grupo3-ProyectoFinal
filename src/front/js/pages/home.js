import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Background } from "../component/background";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<Background>

			</Background>
		</>

	);
};
