import './testimonial.css';

export const TestimonialComponent = (props) => {
  return (
    <div className={`row container-fluid common-pad testimonial ${props.testimonial || ''}`}>
      <div className="container-class">
        <div className="d-grid gap-5">
          <div>
            <h2 className="m-0" style={{ color: "#31d0c4" }}>
              Inspiring Stories !
            </h2>
          </div>
          <div>
            <h5 className='text-white' style={{lineHeight:"1.6"}}>
              Their doctors include highly qualified practitioners who come from
              a range of backgrounds and bring with them a diversity of skils
              and special interests. They also have registered nurses on staff
              who are available to traige any urgen matters, and the
              administration and support staff all have exceptional people
              skills
            </h5>
            <div className="mt-4 d-flex gap-3 align-items-center">
                <div>
                    <img src="/images/blog-author.jpg" width='60px' height='60px' alt="" className='rounded-circle'/>
                </div>
                <div>
                    <h5 className='text-white mb-1'>Sonia Blake</h5>
                    <p className="regular text-white m-0">Promina</p>
                </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};
