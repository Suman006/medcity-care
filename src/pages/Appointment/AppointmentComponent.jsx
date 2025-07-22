import { DoctorComponent } from '../../components/DoctorSection/DoctorComponent';
import { FooterComponent } from '../../components/Footer/FooterComponent';
import { TestimonialComponent } from '../../components/Testimonial/Testimonialcomponent';
import './appointment.css'
import { AppointmentFormComponent } from './AppointmentForm';

export const AppointmentComponent = () => {
    return (
        <div>
            <div className='row container-fluid appointment-section'>
            <div className='container-class grid-y-center'>
                <div className='grid-center'>
                    <div>
                        <h2 className='text-center'>Improve Quality Of Life <br /> Through Better Health.</h2>
                        <p className='regular text-center appoint-para'>Medcity has been present in Europe since 1990, offering innovative <br /> solutions, specializing in medical services for treatment of medical<br /> infrastructure.</p>
                        <div className='grid-center'>
                            <button className='find-btn'>Find a Doctor <i className='bi bi-arrow-right' style={{verticalAlign:'middle',fontSize:'18px'}}></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DoctorComponent appointment='doctors-tile-section'/>
        <TestimonialComponent testimonial='appoint-testimonial' />
        <AppointmentFormComponent />
        <FooterComponent />
        </div>
    )
}