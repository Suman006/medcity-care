import "./aboutcare.css";
import { AboutCareTileComponent } from "./AboutCareTileComponent";

export const AboutCareComponent = () => {
  return (
    <div>
        <div className="row container-fluid care-section">
      <div className="container-class navi panel-body">
        <div className="d-grid gap-5">
          <div>
            <p style={{ color: "#31d0c4" }} className="regular">
              <b>Caring For The Health Of You And Your Family.</b>
            </p>
            <div>
              <h2 className="text-white">
                We Provide All Aspects Of Medical Practice For Your Whole
                Family!
              </h2>
            </div>
          </div>
          <div>
            <p className="regular text-white" style={{ fontWeight: "600" }}>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
            <div className="d-grid mt-5 gap-4">
              <div className="d-flex gap-3 align-items-center">
                <div>
                  <i className="bi bi-check check-icon"></i>
                </div>
                <p
                  className="regular m-0 text-white"
                  style={{ fontWeight: "600" }}
                >
                  Fractures and dislocations
                </p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <div>
                  <i className="bi bi-check check-icon"></i>
                </div>
                <p
                  className="regular m-0 text-white"
                  style={{ fontWeight: "600" }}
                >
                  Health Assessments
                </p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <div>
                  <i className="bi bi-check check-icon"></i>
                </div>
                <p
                  className="regular m-0 text-white"
                  style={{ fontWeight: "600" }}
                >
                  Desensitisation injections
                </p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <div>
                  <i className="bi bi-check check-icon"></i>
                </div>
                <p
                  className="regular m-0 text-white"
                  style={{ fontWeight: "600" }}
                >
                  High Quality Care
                </p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <div>
                  <i className="bi bi-check check-icon"></i>
                </div>
                <p
                  className="regular m-0 text-white"
                  style={{ fontWeight: "600" }}
                >
                  Home medicine review
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 tile-overlap">
            <AboutCareTileComponent />
        </div>
      </div>
    </div>
    <div className="row container-fluid health-care">
        <div className="container-class">
            <div className="d-grid-8-4 gap-5">
                <div className="d-grid-3-9 gap-5">
                    <img src="/images/dp_Icon.png" alt="" width="100%"/>
                    <div className="grid-center">
                        <div>
                        <h5 className="text-white">True Healthcare For Your Family!</h5>
                        <p className="regular text-white">Serve the community by improving the quality of life through better health. We have put protocols to protect our patients and staff while continuing to provide medically necessary care.</p>
                    </div>
                    </div>
                </div>
                <div className="grid-y-center grid-center">
                    <div>
                        <button className="appoint-btn">Healthcare Programs <i className='fa-solid fa-arrow-right right-arrow'></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};
