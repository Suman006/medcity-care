import "./navbar.css";
import "../../../src/components/styles/common.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomeComponent } from "../Home/HomeComponent";
// import { AppointmentComponent } from "../Appointment/AppointmentComponent";
import { AboutPageComponent } from "../AboutPage/AboutIndex/AboutPageComponent";
import { ServiceIndexComponent } from "../ServicePage/ServiceIndex/ServiceIndexComponent";
// import { AppointmentComponent } from "../../components/Appointment/AppointmentComponent";
import { BlogIndexComponent } from "../BlogPage/blogIndex/BlogIndexComponent";
import { AppointmentComponent } from "../Appointment/AppointmentComponent";
import { ContactComponent } from "../ContactPage/ContactComponent";

export const IndexComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="row navbar navbar-expand-lg nav-background container-fluid">
          <div className="container-class nav-flex-large">
            <div className="toggle-flex">
              <Link to="/" className="navbar-brand">
                <img
                  src="/images/nav-logo.png"
                  width="190px"
                  alt=""
                  style={{ marginTop: "5px" }}
                />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ height: "auto", marginTop: "14px" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
              style={{ justifyContent: "center" }}
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link page-item">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="about" className="nav-link page-item">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="service" className="nav-link page-item">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="blog" className="nav-link page-item">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link page-item">
                    Contact
                  </Link>
                </li>

                <form className="gap-2 form-btn-2" role="search">
                  <Link to="appointment">
                    <button class="medcity-btn">
                      <span
                        class="bi bi-calendar-check-fill"
                        style={{ verticalAlign: "middle" }}
                      ></span>
                      &nbsp; Appointment
                    </button>
                  </Link>
                </form>
              </ul>
            </div>
            <form className="gap-2 form-btn-1" role="search">
              <Link to="appointment">
                <button class="medcity-btn">
                  <span
                    class="bi bi-calendar-check-fill"
                    style={{ verticalAlign: "middle" }}
                  ></span>
                  &nbsp; Appointment
                </button>
              </Link>
            </form>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="about" element={<AboutPageComponent />} />
          <Route path="service" element={<ServiceIndexComponent />} />
          <Route path="blog" element={<BlogIndexComponent />} />
          <Route path="contact" element={<ContactComponent />}/>
          <Route path="appointment" element={<AppointmentComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
