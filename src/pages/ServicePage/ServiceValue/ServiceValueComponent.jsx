import { ValueCardcomponent } from '../../AboutPage/AboutValue/Valuecard';
import './servicevalue.css';

export const ServiceValueComponent = () => {
    return(
        <div className="row container-fluid service-value-section">
            <div className="container-class">
                <div className="d-grid-8-4">
                    <div className="d-flex gap-5">
                        <div className='hr-line'></div>
                        <h2 className="text-white m-0">Medcity Has Touched The Lives Of Patients & Providing Care for The Sickest In Our Community.</h2>
                    </div>
                </div>
                <div className="d-grid-5-7 mt-5">
                    <div></div>
                    <div className="d-flex gap-5">
                        <img src="/images/insurance.png" width="70px" alt="" style={{height:"fit-content"}}/>
                        <div>
                            <p className="regular text-white m-0"><b>Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure. With over 100 professionals actively participates in numerous initiatives aimed at creating sustainable change for patients!</b></p>
                        </div>
                    </div>
                </div>
                <div className='value-card-top'>
                    <ValueCardcomponent />
                </div>
                <div className='grid-center mt-5'>
                     <p style={{ fontWeight: "600" }} className="regular text-center text-white m-0">
          Serve the community by improving the quality of life through better
          health. We have put <br /> protocols to protect our patients and staff
          while continuing to provide <br /> medically necessary care.
        </p>
                </div>
            </div>
        </div>
    )
}