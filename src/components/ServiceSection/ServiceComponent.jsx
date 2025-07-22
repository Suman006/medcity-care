import './service.css';
import { ServiceCardComponent } from '../ServiceCard/ServiceCardComponent';

export const ServiceComponent = () =>{

    const OriginalTiles  = [
        {
            image : '/images/service-1.jpg',
            heading : 'Neurology Clinic',
            paragraph : 'Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs are called fellowships years.'
        },
        {
            image : '/images/service-2.jpg',
            heading : 'Cardiology Clinic',
            paragraph : 'All cardiologists study the disorders of the heart, but the study of adult child heart disorders are trained to take care of people heart disease.'
        },
        {
            image : '/images/service-3.jpg',
            heading : 'Pathology Clinic',
            paragraph : 'Pathology is the study of disease, it is the bridge between science & medicine. Also it underpins every aspect of patient care, from diagnostic testing.'
        }
    ]

    return (
        <div className="row container-fluid service-section common-pad">
            <div className="container-class">
                <div className="d-grid gap-5 mb-5">
                    <div>
                        <p className="regular" style={{color:'#435ba1'}}><b>The Best Medical And General Practice Care!</b></p>
                        <div className="mt-4">
                            <h2>Providing Care For The Sickest In Community.</h2>
                        </div>
                    </div>
                    <div>
                        <p className="regular">Medicity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure. With over 100 professionals actively participates in numerous initiative aimed at creating sustainable change for patients!</p>
                    <div className='mt-4'>
                        <button className="appoint-btn">Make an appointment <i className='fa-solid fa-arrow-right right-arrow'></i></button>
                    </div>
                    </div>
                </div>
                <ServiceCardComponent   tiles={OriginalTiles} />
            </div>
        </div>
    )
}