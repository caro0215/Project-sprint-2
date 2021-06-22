import React from "react";
import "./hotelInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function HotelInfo(props) {
  return (
    <div className="contenedor-hotel">
      <div className="img-hoteles">
        <img src={props.photo} alt="la bamba de areco" width="100%"></img>
      </div>
      <div className="hotel-info">
        <h2 className="hotel-titulo">{props.name}</h2>
        <p className="hotel-descripcion">{props.description}</p>
        <div className="hotel-feature">
          <div className="icon-background">
            <FontAwesomeIcon className="icon-place" icon={faMapMarkerAlt} />
          </div>
          <div className="place-text">
            {props.city}, {props.country}
          </div>
        </div>
        <div className="hotel-feature">
          <div className="icon-background">
            <FontAwesomeIcon className="icon-place" icon={faBed} />
          </div>
          <div className="place-text">{props.rooms} habitaciones</div>
        </div>
        <div className="price">
          {[...Array(props.price)].map(() => (
            <FontAwesomeIcon className="icon-price" icon={faDollarSign} />
          ))}
          {[...Array(4 - props.price)].map(() => (
            <FontAwesomeIcon className="icon-price2" icon={faDollarSign} />
          ))}
        </div>
      </div>
      <div className="btn-reservar">
        <button>Reservar</button>
      </div>
    </div>
  );
}
