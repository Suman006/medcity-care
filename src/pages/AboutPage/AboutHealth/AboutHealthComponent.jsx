import './abouthealth.css';

export const AboutHealthComponent = () =>{
    return (
        <div className="row container-fluid health-section">
            <div className="container-class">
                <h2>Improving The Quality Of Your <br /> Life Through Better Health.</h2>
                <div className='d-grid mt-5 gap-5'>
                    <div>
                        <p style={{color:'#0e204d', fontWeight:'600'}} className='regular'>
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and to be the first and best choice for healthcare.
                        </p>
                        <div className='mt-3'>
                            <p className='regular'>We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires clinical and service excellence.</p>
                        </div>
                        <div className='mt-4'>
                            <button className='doctor-btn'>Meet Our Doctors</button>
                            <button className='sign-btn'><h5>Michael Brian</h5> <span style={{color:"#21cdc0", fontSize:"14px"}}>Dermatologists</span></button>
                        </div>
                    </div>
                    <div>
                        <img src='/images/about-2.jpg' className='img-round' width="100%" alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}