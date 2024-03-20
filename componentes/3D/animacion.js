import SizeAvatars from "../contacto/contacto";
import { Nav } from "../nav/Nav";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InboxIcon from "@mui/icons-material/Inbox";
import Avatar from "@mui/material/Avatar";
import style from "../contacto/contacto.module.css";

export const Animacion = () => {
  return (
    <div>
      <nav>
        <div class="navbar">
          <Avatar
            alt="Debora Sabrina Rios"
            src="/Captura-de-pantalla-_89_.ico"
            sx={{
              width: 70,
              height: 70,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          />
        </div>
      </nav>
      <header>
        <div class="hero">
          <div class="content">
            <Nav />
          </div>
        </div>
        {/*cartas de contatco*/}
        <div class="sticker">
          <div class="content">
            <div class="panel">
              <div class="panel__row">
                <div class="card card--one">
                  <div class="card__column">
                    <div class="card__avatar">
                      <a href="https://www.linkedin.com/in/debora-sabrina-rios-fullstack/">
                        <button className={style.botones}>
                          <LinkedInIcon></LinkedInIcon>
                        </button>
                      </a>
                    </div>
                  </div>

                  <div class="card__content">
                    <h3>LinkedIn</h3>
                  </div>
                </div>
              </div>
              {/*carta2*/}
              <div class="panel__row">
                <div class="card card--three">
                  <div class="card__column">
                    <div class="card__avatar">
                      <a href="https://github.com/RiosDeboraS">
                        <button className={style.botones}>
                          <GitHubIcon></GitHubIcon>
                        </button>
                      </a>
                    </div>
                  </div>

                  <div class="card__content">
                    <h3>GitHub</h3>
                  </div>
                </div>
              </div>
              {/* //carta. */}
              <div class="panel__row">
                <div class="card card--three">
                  <div class="card__column">
                    <div class="card__avatar">
                      <a href="mailto:Riosdeborasabrina@gmail.com">
                        <button className={style.botones}>
                          <InboxIcon></InboxIcon>
                        </button>
                      </a>
                    </div>
                  </div>

                  <div class="card__content">
                    <h3>Email</h3>
                  </div>
                </div>
              </div>
              {/* //carta. */}
              <div class="panel__row">
                <div class="card card--one">
                  <div class="card__column">
                    <div class="card__avatar">
                      <a href="https://www.linkedin.com/in/debora-sabrina-rios-fullstack/">
                        <button className={style.botones}>
                          <LinkedInIcon></LinkedInIcon>
                        </button>
                      </a>
                    </div>
                  </div>

                  <div class="card__content">
                    <h3>LinkedIn</h3>
                  </div>
                </div>
              </div>
              {/* //carta futuras aqui. */}
            </div>
          </div>
        </div>

        {/*circulo*/}

        <div class="scroller">
          <div class="content">
            <div class="panel">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="ring ring--under">
          <img
            src="https://assets.codepen.io/605876/portal-ring.png?format=auto&quality=2"
            alt=""
          />
        </div>
        <div class="ring ring--over">
          <img
            src="https://assets.codepen.io/605876/portal-ring.png?format=auto&quality=2"
            alt=""
          />
        </div>
      </header>
      <main>
        <section></section>
      </main>
    </div>
  );
};
