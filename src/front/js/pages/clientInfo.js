import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/clientInfo.css";

export const ClientInfo = () => {
	const { store, actions } = useContext(Context);

	return (
        <div className="container">
            <div className="the-back">
                <div className="wallpa">
                    <img src="https://i.pinimg.com/originals/58/69/d6/5869d65fce581f894d44dcf2807332ef.jpg" alt=""/>
                </div>
                <div className="pic-op">
                    <div className="row">
                        <div className="col-6 ">
                        <img className="position-absolute top-0 start-100 translate-middle" src="https://picsum.photos/150" alt=""/>
                        </div>
                        <div className="col-6">
                            options
                        </div>
                    </div>
                </div>
                <div className="nam">
                    <h1>Kristel Ester Corrales Granados</h1>
                </div>
                <div className="com">
                    <h5>Full Stack Developer</h5>
                </div>
                <div className="pho"></div>
                <div className="bu"></div>
                <div className="des"></div>
            </div>
        </div>
        );
    };
    