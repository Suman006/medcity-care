import "./abouthero.css";

export const AboutHeroComponent = ({ content }) => {
  const {
    extraLine,
    title,
    para,
    button1,
    button2,
    buttonClass,
    sectionClass,
  } = content;
  return (
    <div
      className={`row container-fluid about-page-section ${sectionClass || ""}`}
    >
      <div className="container-class">
        <div className="grid-y-center h-100">
          <div className="d-grid-5-7">
            <div>
              {extraLine && (
                <p className="regular" style={{ color: "rgb(49, 208, 196)" }}>
                  <b>{extraLine}</b>
                </p>
              )}
              <h2>{title}</h2>
              <div className="mt-4">
                <p
                  className="regular"
                  style={{ color: "#0e204d", fontWeight: "600" }}
                >
                  {para}
                </p>
              </div>
              <div className="mt-4">
                <button className="appoint-btn">
                  {button1} <i className='fa-solid fa-arrow-right right-arrow'></i>
                </button>
                <button className={`hero-btn ${buttonClass || ""}`}>
                  {button2} <i className='fa-solid fa-arrow-right right-arrow'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
