import style from "./footer.module.css";

export const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">
          {[...Array(128)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                "--size": `${2 + Math.random() * 4}rem`,
                "--distance": `${6 + Math.random() * 4}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 2}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            />
          ))}
        </div>
        <div className="contenido">
          <div>
            <div>
              <b></b>
            </div>
            <div>
              <b>
                {" "}
                <p>
                  ʕ•ᴥ•ʔ © 2024 Debora Rios. Todos los derechos reservados. |
                  Desarrolladora Full Stack 💜| Argentina 📌🙋‍♀️
                </p>
              </b>
            </div>
            <div>
              <b></b>
            </div>
            <div>
              <b></b>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
            {/* <feComposite in="SourceGraphic" in2="blob" operator="atop" /> */}
          </filter>
        </defs>
      </svg>
    </div>
    // <footer className={style.footer}>
    //   <div>
    //     <p>
    //       ʕ•ᴥ•ʔ © 2024 Debora Rios. Todos los derechos reservados. |
    //       Desarrolladora Full Stack 💜| Argentina 📌🙋‍♀️
    //     </p>
    //   </div>
    // </footer>
  );
};
