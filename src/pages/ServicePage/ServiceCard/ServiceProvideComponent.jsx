// import "../../styles/common.css";
import { ProvideCardComponent } from "./ProvideCardComponent";
import "./serviceprovide.css";

export const ServiceProvideComponent = () => {
  const TileData = [
    {
      image: "/images/service-pill-1.png",
      heading: "Cardiology Clinic",
      para: "All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children and adult heart disease.",
      pills: [
        "Cardiac Electrophysiology",
        "Nuclear Cardiology",
        "Echocardiography",
      ],
    },
    {
      image: "/images/service-pill-2.png",
      heading: "Pathology Clinic",
      para: "Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect , from diagnostic testing and treatment.",
      pills: ["Surgical Pathology", "Histopathology", "Cytopathology"],
    },
    {
      image: "/images/service-pill-3.png",
      heading: "Laboratory Analysis",
      para: "Analyzing the radon or radon progeny concentrations with passive devices, or the act of calibrating radon or radon progeny measurement devices.",
      pills: [
        "Newborn Care",
        "Umbilical Cord Appearance",
        "Repositioning Techniques",
      ],
    },
    {
      image: "/images/service-pill-4.png",
      heading: "Pediatric Clinic",
      para: "Pediatric providers see patients from birth into early adulthood to make sure children achieve stay healthy. Our care includes preventive health checkups.",
      pills: ["Clinical laboratory", "Research Analyst", "Quality Assurance"],
    },
    {
      image: "/images/service-pill-5.png",
      heading: "Cardiac Clinic",
      para: "For people requiring additional follow up, the Cardiac Clinic provides rapid access to professionals specialized in diagnosing and treating heart disease.",
      pills: [
        "Macular degeneration",
        "Diabetic retinopathy",
        "Excessive tearing",
      ],
    },
    {
      image: "/images/service-pill-6.png",
      heading: "Neurology Clinic",
      para: "Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs are called fellowships, and are one to two years.",
      pills: ["Neurocritical", "CareNeuro Oncology", "Geriatric Neurology"],
    },
  ];

  return (
    <div className="row container-fluid provide-section">
      <div className="container-class">
        <div className="grid-center">
          <div>
            <p className="regular text-center m-0" style={{ color: "#435ba1" }}>
              <b>The Best Medical And General Practice Care!</b>
            </p>
            <div className="mt-3 mb-0">
              <h2 className="text-center">
                Providing Medical Care For The <br />
                Sickest In Our Community.
              </h2>
            </div>
          </div>
        </div>
        <div className="grid-3-col mt-5 ">
          {TileData.map((tile, index) => (
            <ProvideCardComponent
              key={index}
              image={tile.image}
              heading={tile.heading}
              para={tile.para}
              pills={tile.pills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
