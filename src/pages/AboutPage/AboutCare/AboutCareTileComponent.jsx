import "../AboutCare/aboutcaretile.css";

export const AboutCareTileComponent = () => {
  return (
    <div>
      <div className="grid-4-col">
        <div className="care-tile w-card card-column-align">
          <div className="w-card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <img
                src="/images/checklist.png"
                width="64px"
                height="64px"
                alt=""
              />
              <h1 className="number m-0">01</h1>
            </div>
            <h6>
              Fill In our Medical
              <br /> Application
            </h6>
            <div className="mt-4">
              <p className="regular">
                Medcity offers low-cost health coverage for adults with limited
                income.
              </p>
            </div>
          </div>
          <div className="w-card-footer">
            <button className="care-btn">
              Doctros Timetable
              <i className='fa-solid fa-arrow-right right-arrow care-icon'></i>
            </button>
          </div>
        </div>
        <div className="care-tile w-card card-column-align">
          <div className="w-card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <img src="/images/syrup.png" width="64px" height="64px" alt="" />
              <h1 className="number m-0">02</h1>
            </div>
            <h6>
              Choose Between Our
              <br /> Care Programs
            </h6>
            <div className="mt-4">
              <p className="regular">
                We have protocols to protect our patients while continuing to
                provide necessary care.
              </p>
            </div>
          </div>
          <div className="w-card-footer">
            <button className="care-btn">
              Explore Programs
              <i className='fa-solid fa-arrow-right right-arrow care-icon'></i>
            </button>
          </div>
        </div>
        <div className="care-tile w-card card-column-align">
          <div className="w-card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <img
                src="/images/stethoscope-medical-tool.png"
                width="64px"
                height="64px"
                alt=""
              />
              <h1 className="number m-0">03</h1>
            </div>
            <h6>
              Introduce to Highly <br />
              Qualified Doctors
            </h6>
            <div className="mt-4">
              <p className="regular">
                Our administration and support staff have exceptional skills to
                assist you.
              </p>
            </div>
          </div>
          <div className="w-card-footer">
            <button className="care-btn">
              Meet Our Doctors
              <i className='fa-solid fa-arrow-right right-arrow care-icon'></i>
            </button>
          </div>
        </div>
        <div className="care-tile w-card card-column-align">
          <div className="w-card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <img
                src="/images/think-green.png"
                width="64px"
                height="64px"
                alt=""
              />
              <h1 className="number m-0">04</h1>
            </div>
            <h6>
              Introduce to Highly <br />
              Qualified Doctors
            </h6>
            <div className="mt-4">
              <p className="regular">
                Our administration and support staff have exceptional skills to
                assist you.
              </p>
            </div>
          </div>
          <div className="w-card-footer">
            <button className="care-btn">  
              Custom The Link
              <i className='fa-solid fa-arrow-right right-arrow care-icon'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
