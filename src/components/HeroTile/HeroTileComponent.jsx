import { FadeDownWrapper } from '../AnimationWrapper/FadeDownWrapper';
import './HeroTile.css';

export const HeroTileComponent = () => {
    return (
        <FadeDownWrapper>
            <div className="row container-fluid tile-section">
            <div className="container-class">
                <div className="d-grid-8-4 gap-4" style={{marginTop:'-50px'}}>
                    <div className="grid-3-col column-gap-0">
                        <div className="border-right">
                            <div className="hero-tile p-4 w-card" style={{borderRadius:"10px 0px 0px 10px"}}>
                            <div className='w-card-body'>
                                <img src="/images/check-up.png" width="64px" className="mb-3" alt=""/>
                                <h5>Medcal Advices & Check Ups</h5>
                            </div>
                        </div>
                        </div>
                        <div className="border-right">
                            <div className="hero-tile p-4 w-card" style={{borderRadius:"0px 0px 0px 0px"}}>
                            <div className='w-card-body'>
                                <img src="/images/doctor.png" width="64px" className="mb-3" alt=""/>
                                <h5>Trusted Medical Treatment</h5>
                            </div>
                        </div>
                        </div>
                        <div>
                            <div className="hero-tile p-4 w-card" style={{borderRadius:"0px 10px 10px 0px"}}>
                            <div className='w-card-body'>
                                <img src="/images/ambulance.png" width="64px" className="mb-3" alt=""/>
                                <h5>Emergency Help Available 24/7</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='health-card p-4'>
                        <div>
                            <h5 style={{color:'white'}}>Doctors timetable</h5>
                            <div className='mt-3'>
                                <p className='regular'style={{color:'white'}}>qualified doctors available six days a week, view timetable</p>
                            </div>
                            <button className="timetable-btn">View timetable <i className='fa-solid fa-long-arrow-right right-arrow'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </FadeDownWrapper>
    )
}