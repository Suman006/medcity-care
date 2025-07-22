import { FooterComponent } from "../../components/Footer/FooterComponent";
import { AppointmentFormComponent } from "../Appointment/AppointmentForm";

export const ContactComponent = ({testimonial}) => {
  return (
    <div>
      <div className="row container-fluid p-0">
        <iframe
        className="p-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28941.045293943418!2d78.3468035743164!3d17.462313700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917df77e5ba9%3A0xa47221c5deef3da2!2sYashoda%20Hospitals%20Hitech%20City!5e1!3m2!1sen!2sin!4v1752321127033!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      <AppointmentFormComponent />
      <FooterComponent />
    </div>
  );
};
