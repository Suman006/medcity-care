import { AboutComponent } from "../../components/AboutSection/AboutComponent";
import { ArticleComponent } from "../../components/ArticleSection/ArticleComponent";
import { DoctorComponent } from "../../components/DoctorSection/DoctorComponent";
import { FooterComponent } from "../../components/Footer/FooterComponent";
import { HeroComponent } from "../../components/HeroSection/HeroComponent";
import { HeroTileComponent } from "../../components/HeroTile/HeroTileComponent";
import { ServiceComponent } from "../../components/ServiceSection/ServiceComponent";
import { TestimonialComponent } from "../../components/Testimonial/Testimonialcomponent";

export const HomeComponent = () => {
  return (
    <>
      <HeroComponent />
      <HeroTileComponent />
      <AboutComponent />
      <ServiceComponent />
      <DoctorComponent />
      <TestimonialComponent />
      <ArticleComponent />
      <FooterComponent />
    </>
  );
};
