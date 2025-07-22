import "./servicehero.css";

import { AboutHeroComponent } from "../../AboutPage/AboutHero/AboutHerocomponent";

export const ServiceHeroComponent = () => {
  const AboutHeroContent = {
    sectionClass: "service-page-hero-section",
    extraLine: "Caring For The Health Of You And Your Family.",
    title: "We Provide All Aspects Of Medical Practice For Your Whole Family!",
    para: "Medcity has been present in Europe since 1990, offering innovative solutions, specializing in medical services for treatment of medical infrastructure.",
    button1: "Find A Doctor",
    button2: "More About Us",
    buttonClass: "more-about",
  };

  return (
    <div>
      <AboutHeroComponent content={AboutHeroContent} />
    </div>
  );
};
