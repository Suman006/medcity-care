
import { DoctorComponent } from "../../../components/DoctorSection/DoctorComponent";
import { FooterComponent } from "../../../components/Footer/FooterComponent";
import { TestimonialComponent } from "../../../components/Testimonial/Testimonialcomponent";
import { AppointmentFormComponent } from "../../Appointment/AppointmentForm";
import { ServiceProvideComponent } from "../ServiceCard/ServiceProvideComponent";
import { ServiceHeroComponent } from "../ServiceHero/ServiceHeroComponent";
import { ServiceValueComponent } from "../ServiceValue/ServiceValueComponent";

export const ServiceIndexComponent = () => {
  return (
    <div>
      <ServiceHeroComponent />
      <ServiceProvideComponent />
      <ServiceValueComponent />
      <DoctorComponent appointment="doctors-tile-section" />
      <TestimonialComponent testimonial="appoint-testimonial" />
      <AppointmentFormComponent />
      <FooterComponent />
    </div>
  );
};
