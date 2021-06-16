import React from "react";
import "./filtros.css";

export default function Filtros() {
  return (
    <div className="contenedor-filtros">
      <label for="check-in" className="label-dates">
        Check-in:
      </label>
      <input
        id="check-in"
        type="date"
        className="date"
        value="Check-in"
      ></input>
      <label for="check-out" className="label-dates">
        Check-out:
      </label>
      <input id="check-out" type="date" className="date"></input>
      <select id="categorias" name="categorias" className="date">
        <option value="">Todos los países</option>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
        <option value="uruguay">Uruguay</option>
      </select>
      <select id="precio" name="categorias" className="date">
        <option value="">Cualquier precio</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
      <select id="tamano" name="categorias" className="date">
        <option value="">Cualquier tamaño</option>
        <option value="small">Pequeño</option>
        <option value="med">Mediano</option>
        <option value="big">Grande</option>
      </select>
    </div>
  );
}
