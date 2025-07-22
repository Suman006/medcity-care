import { Link } from "react-router-dom";
import "./bloghero.css";

export const BlogHeroComponent = () => {
  return (
    <div>
        <div className="row container-fluid blog-hero">
          <div className="container-class grid-y-center">
            <div>
              <h2>Health Essentials</h2>
              <p className="regular text-black fw-semibold">
                <Link to="/" style={{color:"#000"}}>Home</Link> <i className="bi bi-chevron-right me-2"></i>
                <span style={{color:"#0e204d"}}>Blog</span>
              </p>
            </div>
          </div>
        </div>
        
    </div>
  );
};
