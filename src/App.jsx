import React, { useState } from "react";
import "./styles.css";
import Header from "./Componentes/Header/header.jsx";
import Filtros from "./Componentes/Filtros/filtros.jsx";
//import Resultados from "./Componentes/Resultados/resultados.jsx";
import { hotelsData } from "./data.js";
import HotelInfo from "./Componentes/Resultados/hotelInfo.jsx";

export default function App() {
  //hook input date
  const [fechaFrom, setFechaFrom] = useState("");
  const [fechaTo, setFechaTo] = useState("");
  //hook input pais
  const [pais, setPais] = useState("cualquier pais");
  //Hook precio
  const [precio, setPrecio] = useState("cualquier precio");
  //Hook tamaño
  const [size, setSize] = useState("cualquier tamaño");

  //Función input date
  const cambioFechaFrom = (event) => {
    let dateString = new Date(event.target.value);
    let tiempoUnix = dateString.getTime();
    setFechaFrom(event.target.value);
  };
  const cambioFechaTo = (event) => {
    let dateString = new Date(event.target.value);
    let tiempoUnix = dateString.getTime();
    setFechaTo(event.target.value);
  };

  //Función input select pais
  const cambioPais = (event) => {
    setPais(event.target.value);
  };

  //Función input select precio
  const cambioPrecio = (event) => {
    setPrecio(event.target.value);
  };

  //Función input select tamaño
  const cambioSize = (event) => {
    setSize(event.target.value);
  };

  //lista filtrada
  const crearLista = () => {
    let nuevaLista = hotelsData;
    //filtro por país
    if (pais !== "cualquier pais") {
      nuevaLista = nuevaLista.filter((hotel) => hotel.country === pais);
    }
    //filtro precio
    if (precio === "$") {
      nuevaLista = nuevaLista.filter((hotel) => hotel.price === 1);
    }
    if (precio === "$$") {
      nuevaLista = nuevaLista.filter((hotel) => hotel.price === 2);
    }
    if (precio === "$$$") {
      nuevaLista = nuevaLista.filter((hotel) => hotel.price === 3);
    }
    if (precio === "$$$$") {
      nuevaLista = nuevaLista.filter((hotel) => hotel.price === 4);
    }
    //filtro tamaño
    if (size === "hotel pequeño") {
      nuevaLista = nuevaLista.filter((hotel) => hotel.rooms <= 10);
    }
    if (size === "hotel mediano") {
      nuevaLista = nuevaLista.filter(
        (hotel) => hotel.rooms > 11 && hotel.rooms <= 20
      );
    }
    if (size === "hotel grande") {
      nuevaLista = nuevaLista.filter((hotel) => hotel.rooms > 21);
    }

    return nuevaLista;
  };

  let listaFiltrada = crearLista();

  //Limpiar botón
  const limpiarSeleccion = () => {
    setFechaFrom("");
    setFechaTo("");
    setPais("cualquier pais");
    setPrecio("cualquier precio");
    setSize("cualquier size");
  };

  return (
    <div className="contenedor-app ">
      <Header />
      <Filtros
        fechaFrom={fechaFrom}
        cambioFechaFrom={cambioFechaFrom}
        fechaTo={fechaTo}
        cambioFechaTo={cambioFechaTo}
        pais={pais}
        cambioPais={cambioPais}
        precio={precio}
        cambioPrecio={cambioPrecio}
        size={size}
        cambioSize={cambioSize}
        limpiar={limpiarSeleccion}
      />
      <div className="contenedor-resultados">
        {listaFiltrada.length > 0 ? (
          listaFiltrada.map((hotel) => (
            <HotelInfo
              name={hotel.name}
              photo={hotel.photo}
              description={hotel.description}
              rooms={hotel.rooms}
              city={hotel.city}
              country={hotel.country}
              price={hotel.price}
            />
          ))
        ) : (
          <div className="not-found">
            <img
              src="./images/not-found.png"
              alt="sin resultados"
              width="600px"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
}
