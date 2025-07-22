import "./footer.css";
// import "../styles/common.css";

export const FooterComponent = () => {
  return (
    <footer>
        <div className="row container-fluid footer-section">
      <div className="container-class">
        <div className="d-grid-8-4">
          <div className="d-grid-5-7">
            <div>
              <img src="/images/logo-2.png" alt="" width="190px" />
              <div className="mt-4">
                <p className="small text-white">
                  Our goal is to deliver quality of care in a courteous,
                  respectful, and compassionate manner. We hope you will allow
                  us to care for you and strive to be the first and best choice
                  for your family healthcare.
                </p>
              </div>
              <button className="foot-appoint-btn p-0">
                <i className='fa-solid fa-arrow-right right-arrow ms-0 me-2'></i>Make Appointment
              </button>
            </div>
            <div className="d-grid gap-4">
                <div>
              <h6 className="text-white">Departments</h6>
              <ul className="mt-4 p-0">
                <li className="foot-link">Neurology Clinic</li>
                <li className="foot-link">Cardiology Clinic</li>
                <li className="foot-link">Pathology Clinic</li>
                <li className="foot-link">Laboratory Analysis</li>
                <li className="foot-link">Pediatric Clinic</li>
                <li className="foot-link">Outpatient Surgery</li>
              </ul>
            </div>
            <div>
              <h6 className="text-white">Links</h6>
              <ul className="mt-4 p-0">
                <li className="foot-link">About Us</li>
                <li className="foot-link">Our Clinic</li>
                <li className="foot-link">Our Doctors</li>
                <li className="foot-link">News & Media</li>
                <li className="foot-link">Appointments</li>
              </ul>
            </div>
            </div>
          </div>
          <div>
            <div className="quick-form">
              <h6>Quick Contacts</h6>
              <div className="mt-4">
                <p className="small">If you have any questions or need help, feel free to contact us
                for medical assistance.</p>
              </div>
              <button className="tele-btn mb-3">
                <i className="bi bi-telephone-fill"></i> 01061245741
              </button>
              <p className="small">2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
              <div className="d-flex align-items-center gap-4 mt-4">
                <div>
                  <button className="foot-appoint-btn mt-0 p-0">
                    <i className='fa-solid fa-arrow-right right-arrow ms-0 me-2'></i>Get Directions
                  </button>
                </div>
                <div>
                  <i className="bi bi-facebook social-icon"></i>
                  <i className="bi bi-instagram social-icon"></i>
                  <i className="bi bi-twitter social-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row container-fluid bg-white pt-4 pb-4">
        <div className="container-class">
            <div className="d-flex flex-wrap justify-content-between gap-4 align-items-center">
                <p className="small m-0" style={{color:"#848e9f"}}>©2025 Medcity, All Rights Reserved.</p>
                <div className="d-flex gap-4">
                    <p className="small m-0" style={{color:"#848e9f"}}>Terms & Conditions</p>
                    <p className="small m-0" style={{color:"#848e9f"}}>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
    </footer>
  );
};
