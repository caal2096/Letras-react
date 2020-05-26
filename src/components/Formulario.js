import React, { useState } from "react";

const Formulario = ({ guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  // funcion para leer los input
  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const busquedarInformacion = (e) => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);
    //Todo bien pasa al componente principal
    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={busquedarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fildset>
              <legent className="text-center">Buscador letras Canciones</legent>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>

                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cancion</label>

                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Nombre Cancion"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fildset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
