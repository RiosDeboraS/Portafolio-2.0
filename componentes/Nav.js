import "bootstrap/dist/css/bootstrap.min.css";
import VerticalLinearStepper from "./about/about";

export const Nav = () => {
  return (
    <div
      class="card mb-3"
      style={{
        maxWidth: "100%",
        background: "#394867",
      }}
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="/Captura de pantalla (89).png"
            class="img-fluid rounded-start"
            alt="LOGO"
            style={{
              width: "100",

              borderRadius: "100%",
            }}
          />
        </div>
        <div class="col-md-8">
          <div
            class="card-body"
            style={{
              color: "#B5C0D0",
              margin: "10px 10px 10px",
              justifyItems: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 class="card-title"> ¡Hello, I'm Debora Sabrina Rios.!</h2>
            <h3 class="card-text">
              {" "}
              Full-Stack developer with specialization in Backe-end
              <p> </p>
            </h3>

            <p class="card-text"></p>
            <VerticalLinearStepper />
          </div>
        </div>
      </div>
    </div>
  );
};
