import Galery from "../Galery/galery";
import VerticalLinearStepper from "../about/about";
import SizeAvatars from "../contacto/contacto";
import { Nav } from "../nav/Nav";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InboxIcon from "@mui/icons-material/Inbox";
import { Footer } from "../footer/footer";

export const Animacion = () => {
  return (
    <div>
      <nav>
        <div class="navbar">
          <circle
            cx="161.191"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            stroke-width="20"
          ></circle>
          <circle
            cx="806.809"
            cy="320.191"
            r="133.191"
            stroke="currentColor"
            stroke-width="20"
          ></circle>
          <circle
            cx="695.019"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>
          <circle
            cx="272.981"
            cy="587.733"
            r="31.4016"
            fill="currentColor"
          ></circle>

          <rect
            x="310.42"
            y="448.31"
            width="343.468"
            height="51.4986"
            fill="#FF1E1E"
          ></rect>
          <img
            src="/Captura-de-pantalla-_89_.ico"
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              borderRadius: "100%",
              width: "70px",
              height: "70px",
            }}
          ></img>
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
                        <button>
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
                        <button>
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
                <div class="card card--two">
                  <div class="card__column">
                    <div class="card__avatar">
                      <a href="mailto:Riosdeborasabrina@gmail.com">
                        <button>
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
              {/* //carta */}
              <div class="panel__row">
                <div class="card card--six">
                  <div class="card__column">
                    <div class="card__avatar"></div>
                    <div class="card__dummy">
                      <div class="text-wrap"></div>
                      <div class="grid">
                        <div class="grid__panel"></div>
                        <div class="grid__panel"></div>
                        <div class="grid__panel"></div>
                        <div class="grid__panel"></div>
                      </div>
                    </div>
                  </div>

                  <div class="card__content">
                    <div class="card__details"></div>
                  </div>
                  <div class="card__column"></div>
                </div>
              </div>
              {/* //carta. */}
              <div class="panel__row">
                <div class="card card--five">
                  <div class="card__column">
                    <div class="card__avatar"></div>
                    <div class="card__dummy">
                      <div class="text-wrap"></div>
                      <div class="grid">
                        <div class="grid__panel"></div>
                        <div class="grid__panel"></div>
                        <div class="grid__panel"></div>
                        <div class="grid__panel"></div>
                      </div>
                      <div class="cta"></div>
                    </div>
                  </div>

                  <div class="card__content">
                    <div class="card__details"></div>
                  </div>
                  <div class="card__column"></div>
                </div>
              </div>
              {/* //carta. */}
              <div class="panel__row">
                <div class="card card--four">
                  <div class="card__column">
                    <div class="card__avatar"></div>
                  </div>

                  <div class="card__content">
                    <div class="card__details">
                      <div class="card__dummy">
                        <div class="text-wrap"></div>
                      </div>
                    </div>
                  </div>
                  <div class="card__column"></div>
                </div>
              </div>
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
        <section>
          <Galery />
        </section>
      </main>
      <footer>
        ʕ•ᴥ•ʔ <Footer></Footer>
      </footer>
    </div>
  );
};
