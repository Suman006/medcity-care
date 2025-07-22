import '../AboutValue/valuecard.css'

export const ValueCardcomponent = ({valueGap}) =>{ 
    return (
       <div>
         <div className={`grid-4-col ${valueGap || ''}`}>
            <div className='value-card'>
                <img src='/images/check-up.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Medcal Advices & <br /> Check Ups</h6>
            </div>
            <div className='value-card'>
                <img src='/images/doctor.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Trusted Medical Treatment</h6>
            </div>
            <div className='value-card'>
                <img src='/images/ambulance.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Emergency Help <br /> Available 24/7</h6>
            </div>
            <div className='value-card'>
                <img src='/images/medicine.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Medical Research Professionals</h6>
            </div>
            <div className='value-card'>
                <img src='/images/doctor-bag.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Only Qualified Doctors</h6>
            </div>
            <div className='value-card'>
                <img src='/images/hospital.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Cutting Edge <br />Facility</h6>
            </div>
            <div className='value-card'>
                <img src='/images/website.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Affordable Prices For All Patients</h6>
            </div>
            <div className='value-card'>
                <img src='/images/band-aid.png' alt='' width="64px" className='mb-3' />
                <h6 className='m-0'>Quality Care For Every Patient</h6>
            </div>
        </div>

        {/* <div className='w-card value-card'>
            <div className='w-card-body'>
                <img src={pillImage} alt='' width="64px" className='mb-3' />
                <h6>{Heading}</h6>
            </div>
        </div> */}

       </div>

        
    )
}