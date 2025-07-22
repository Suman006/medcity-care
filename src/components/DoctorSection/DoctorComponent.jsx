import { ServiceCardComponent } from '../ServiceCard/ServiceCardComponent'
// import '../styles/common.css'
import './doctor.css'

export const DoctorComponent = (props) => {

    const specialization  = [
        {
            image :'/images/doctor-1.jpg',
            heading : 'Richard Muldoone',
            extraline: 'Cardiology Specialist',
            paragraph: 'Diagnoses and manages heart conditions like hypertension, arrhythmia, heart attacks, and provides preventive cardiac care and lifestyle guidance.'
        },
        {
            image :'/images/doctor-2.jpg',
            heading : 'Michael Brian',
            extraline: 'Dermatologists',
            paragraph: 'Expert in treating a wide range of skin, hair, and nail disorders such as acne, eczema, psoriasis, infections, and performing cosmetic procedures.'
        },
        {
            image :'/images/doctor-3.jpg',
            heading : 'Maria Andaloro',
            extraline: 'Pediatrician',
            paragraph: 'Offers comprehensive healthcare for infants, children, and teens, including vaccinations, growth monitoring, and treatment of childhood illnesses.'
        }
    ]

    return(
        <div className={`row container-fluid bg-white common-pad ${props.appointment || ''}`}>
            <div className="container-class">
                <div className="grid-center mb-5">
                    <h2 className='text-center'>Meet Our Doctors</h2>
                    <div>
                        <p className='regular text-center'>Our administration and support staff all have exceptional people <br /> skills and trained to assist you with all medical enquiries</p>
                    </div>
                </div>
                <ServiceCardComponent tiles={specialization} buttonVariant='blue-btn'  />
            </div>
        </div>
    )
}