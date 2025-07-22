import { FadeDownWrapper } from '../AnimationWrapper/FadeDownWrapper';
import './about.css';

export const AboutComponent = () => {
    return(
        <FadeDownWrapper>
            <div className='row container-fluid about-section common-pad'>
            <div className='container-class'>
                <div>
                    <p style={{color:'#31d0c4'}} className='regular'><b>Helping Patients From Around The Globe !</b></p>
                    <div>
                        <h2>Improving The Quality Of Your <br />Life Through Better Health.</h2>
                    </div>
                </div>
                <div className='grid-3-col mt-5'>
                    <div className='grid-y-center'>
                        <div>
                        <h1 className='number-head'>30</h1>
                        <div>
                            <h5>Years of Experience</h5>
                        </div>
                        <p className='regular'>we offer a wide range of care and support to our patients, from diagnosis to rehabilitation.</p>
                    </div>
                    </div>
                    <div>
                        <img src='/images/about-banner.jpg' alt='' width="100%" />
                    </div>
                    <div>
                        <img src='/images/doctor.png' alt='' width='80px' />
                        <div className='mt-4 mb-4'>
                            <h6>Our goal is deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.</h6>
                        </div>
                        <p className='regular'>We will work with you to develop individualised care plans, including management of diseases. We are commited to being the region's premier healthcare network providing patient centered care that inspires service excellence</p>
                        <button className='find-btn'>Find a Doctor <i className='fa-solid fa-arrow-right right-arrow'></i></button>
                    </div>
                </div>
            </div>
        </div>
        </FadeDownWrapper>
    )
}