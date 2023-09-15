import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/background.css";
import "../../styles/createQuotation.css";
import "../../styles/quotationInputs.css";
import "../../styles/listQuotation.css";
import "../../styles/quotationCard.css"
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
