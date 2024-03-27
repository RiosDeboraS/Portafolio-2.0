import React from "react";

const ResponsiveComponent = () => {
  return (
    <div className="contenedor-Flip">
      <h2
        style={{
          color: "black",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        Proyectos
      </h2>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: "url(/nutriMarket.png)",
          }}
        ></div>
        <div className="back">
          <h4 style={{ color: "black" }}>NutriMarket</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <img
              src="/icons8-expresar-js-50.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-mongo-db-64.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-reaccionar-30.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-javascript-50.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-redux-50.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-rápidamente-48.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
          </p>
        </div>
      </div>
      {/* Otros flip cards aquí */}
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: "url(/vortexx.png)",
          }}
        ></div>
        <div className="back">
          <h4 style={{ color: "black" }}>Vorttex Gaming</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <img
              src="/icons8-siguientejs-48.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-prisma-orm-50.png"
              style={{ background: "white" }}
            ></img>
            <img
              src="/icons8-mecanografiado-50.png"
              style={{ background: "white" }}
            ></img>
            <img
              src="/icons8-javascript-50.png"
              style={{ background: "white" }}
            ></img>
            <img
              src="/icons8-postgresql-50.png"
              style={{ background: "white" }}
            ></img>
          </p>
        </div>
      </div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        ></div>
        <div className="back">
          <h4 style={{ color: "black" }}>Fenix Cell</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <img
              src="/icons8-siguientejs-48.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-logotipo-de-bootstrap-30.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-siguientejs-48.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-javascript-50.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
            <img
              src="/icons8-javascript-50.png"
              style={{
                background: "white",
                width: "50px",
                height: "50px",
                margin: "0px",
              }}
            ></img>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
