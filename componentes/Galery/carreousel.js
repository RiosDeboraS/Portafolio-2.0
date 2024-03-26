import React from "react";

const ResponsiveComponent = () => {
  return (
    <div className="contenedor-Flip">
      <h2 style={{ color: "black" }}>Proyectos</h2>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">MOUNTAIN</h1>
        </div>
        <div className="back">
          <h4>NutriMarket</h4>
        </div>
        <p>js</p>
      </div>
      {/* Otros flip cards aquí */}
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">NutriMarket</h1>
        </div>
        <div className="back">
          <h4>NutriMarket</h4>
        </div>
        <p>Go</p>
      </div>
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">MOUNTAIN</h1>
        </div>
        <div className="back">
          <h4>Angular</h4>
        </div>
        <p>Go</p>
      </div>
      {/* <h4>Vertical Flip</h4>
      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">FOREST</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everything by hand..
          </p>
        </div>
      </div>

      <div className="flip flip-vertical">
        <div
          className="front"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)",
          }}
        >
          <h1 className="text-shadow">FOREST</h1>
        </div>
        <div className="back">
          <h2>Angular</h2>
          <p>
            Good tools make application development quicker and easier to
            maintain than if you did everything by hand..
          </p>
        </div> 
      </div>*/}
    </div>
  );
};

export default ResponsiveComponent;
