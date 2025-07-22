import './providecard.css'

export const ProvideCardComponent = ({image, heading, para, pills =[]}) => {
    return(
        <div className="provide-tile w-card card-column-align">
            <div className="w-card-body">
                <img src={image} alt="" className="tile-image mb-4"/>
                <div className='mb-3'><h5 className='m-0'>{heading}</h5></div>
                <p className="regular m-0">{para}</p>
                {
                    pills.map((pill, index)=>(
                        <div key={index} className='d-flex align-items-center mt-3 gap-2'>
                            <img src='/images/mark.png' width="20px" alt='' />
                            <p style={{fontWeight:"600"}} className='regular m-0'>{pill}</p>
                        </div>
                    ))
                }
            </div>
            <div className="w-card-footer">
                <button className='provide-btn'>Read more <i className='fa-solid fa-arrow-right right-arrow'></i></button>
            </div>
        </div>
    )
}