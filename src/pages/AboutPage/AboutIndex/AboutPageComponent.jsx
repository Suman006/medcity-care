// import { ArticleComponent } from "../../ArticleSection/ArticleComponent";
import { ArticleComponent } from "../../../components/ArticleSection/ArticleComponent";
import { DoctorComponent } from "../../../components/DoctorSection/DoctorComponent";
import { FooterComponent } from "../../../components/Footer/FooterComponent";
import { TestimonialComponent } from "../../../components/Testimonial/Testimonialcomponent";


// import { DoctorComponent } from "../../DoctorSection/DoctorComponent";
// import { FooterComponent } from "../../Footer/FooterComponent";
// import { TestimonialComponent } from "../../Testimonial/Testimonialcomponent";
import { AboutCareComponent } from "../AboutCare/AboutCareComponent";
import { AboutHealthComponent } from "../AboutHealth/AboutHealthComponent";
import { AboutHeroComponent } from "../AboutHero/AboutHerocomponent";
import { AboutValueComponent } from "../AboutValue/AboutValueComponent";

export const AboutPageComponent = () => {
  const AboutHeroContent = {
    title: "Caring For The Health & Well Being Of Family.",
    para: "Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure.",
    button1: "Find A Doctor",
    button2: "Our Services",
  };
  return (
    <div>
      <AboutHeroComponent content={AboutHeroContent}/>
      <AboutHealthComponent />
      <AboutValueComponent />
      <AboutCareComponent />
      <DoctorComponent appointment='doctors-tile-section' />
      <TestimonialComponent />
      <ArticleComponent />
      <FooterComponent />
    </div>
  );
};
