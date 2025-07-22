
import "./aboutvalue.css";
import { ValueCardcomponent } from "./Valuecard";

export const AboutValueComponent = ({valueGap}) => {

  // const valueCard  = [
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices &  Check Ups`
  //   },
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices & Check Ups`
  //   },
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices & Check Ups`
  //   },
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices & Check Ups`
  //   },
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices & Check Ups`
  //   },
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices & Check Ups`
  //   },
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices & Check Ups`
  //   },
  //   {
  //     pillImage:'/public/images/check-up.png',
  //     Heading: `Medcal Advices & Check Ups`
  //   },
  // ]

  return (
    <div>
        <div className="row container-fluid value-section">
      <div className="container-class">
        <div className="d-grid-5-7">
          <h2>Providing Care for The Sickest In Community.</h2>
          <div>
            <p className="regular" style={{ fontWeight: "600" }}>
              Medcity has been present in Europe since 1990, offering innovative
              solutions, specializing in medical services for treatment of
              medical infrastructure. With over 100 professionals actively
              participates in numerous initiatives aimed at creating sustainable
              change for patients!
            </p>
            <button className="appoint-btn mt-4">
              Make an Appointment <i className='fa-solid fa-arrow-right right-arrow'></i>
            </button>
          </div>
        </div>
        <div className='mt-5'>
          <ValueCardcomponent valueGap='element-space' />
        </div>
      </div>
    </div>
    <div className="row container-fluid">
    <div className="container-class">
        <div className="value-content">
            <p style={{ fontWeight: "600" }} className="regular text-center">
          Serve the community by improving the quality of life through better
          health. We have put <br /> protocols to protect our patients and staff
          while continuing to provide <br /> medically necessary care.
        </p>
        </div>
    </div>
    </div>
    </div>
  );
};
