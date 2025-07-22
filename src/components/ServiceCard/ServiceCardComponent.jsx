import "./servicecard.css";

export const ServiceCardComponent = ({ tiles, buttonVariant, gap }) => {
  return (
    <div>
      <div className="grid-3-col">
        {tiles.map((tile, index) => (
          <div className="w-card card-column-align appoint-card-hover" key={index}>
            <div className="position-relative">
              <div style={{overflow:"hidden"}}>
                <img src={tile.image} width="100%" alt="" />
                </div>
            {tile.pill && <button className="article-pill">{tile.pill}</button>}
              </div>
            <div className="appoint-card w-card card-column-align">
              <div className="w-card-body">
                
                <h6 className={`${gap || ''}`}>{tile.heading}</h6>
                {tile.extraline && <p className="regular" style={{color:'#31d0c4'}}><b>{tile.extraline}</b></p>}
                <div className="mt-3 mb-4">
                  <p className="regular">{tile.paragraph}</p>
                </div>
              </div>
              <div className="w-card-footer">
                <button className={`read-btn ${buttonVariant || ''}`}>
                  Read More 
                  <i className='fa-solid fa-arrow-right right-arrow ms-2'></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
