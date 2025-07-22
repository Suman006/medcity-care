import { Link } from "react-router-dom";
import "./hero.css";
import { FadeDownWrapper } from "../AnimationWrapper/FadeDownWrapper";

export const HeroComponent = () => {
  return (
    <FadeDownWrapper>
      <section>
      <div className="row hero-section container-fluid">
        <div className="container-class">
          <div className="grid-y-center h-100">
            <div className="d-grid">
                <div>
            <p className="regular" style={{color:'#0e204d'}}>
              <b>Caring For The Health And Well Being of Family.</b>
            </p>
            <div className="mt-4 mb-3">
              <h1>Quality Health Care for family</h1>
            </div>
            <p className="regular" style={{color:'#0e204d', fontWeight:'600'}}>
              The Health and well-being of our patients and their health care
              team will always be our priority, so we follow the best pratices
              for cleanliness.
            </p>
            <Link to="about"><button className="hero-btn mt-4">More about us &nbsp;<i className='fa-solid fa-arrow-right right-arrow'></i></button></Link>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeDownWrapper>
  );
};
