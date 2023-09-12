import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/clientInfo.css";

export const ClientInfo = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="container">
            <div className="box">
                <div className="box-top">
                    <img src="https://picsum.photos/150" alt=""/>
                    <div className="title-flex">
                        <h3 className="box-title">Kelsie Meyer</h3>
                    </div>
                    <p className="description">Whipped steamed roast cream beans macchiato skinny grinder café. Iced grinder go mocha steamed grounds cultivar panna aroma.</p>
                    </div>
                <a href="#" className="button">Follow Kelsie</a>
            </div>
        </div>
        );
    };
    