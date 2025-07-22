import { Field, Form, Formik, ErrorMessage } from "formik";
import "./appointmentform.css";
import * as yup from "yup";
import { useState } from "react";
import { FormInputComponent } from "./CustomInput/FormInputComponent";
import { FormSelectComponent } from "./CustomInput/FormSelectComponent";

export const AppointmentFormComponent = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="row container-fluid appointment-form">
      <div className="container-class">
        <div className="form-container d-grid-7-5">
          <div>
            <h5>Book an Appointment</h5>
            <p className="small mt-3 text-secondary">
              Please feel welcome to contact our friendly reception staff with
              any general or medical enquiry. Our doctors will receive or return
              any urgent calls.
            </p>
            <Formik
              initialValues={{
                Clinic: "",
                Doctor: "",
                UserName: "",
                Email: "",
                Mobile: "",
                Date: "",
                Time: "",
              }}
              validationSchema={yup.object({
                Clinic: yup.string().required("Please select a clinic"),
                Doctor: yup.string().required("Please select a doctor"),
                UserName: yup.string().required("Username required"),
                Email: yup.string().email().required("Email Required"),
                Mobile: yup
                  .string()
                  .matches(/^[0-9]{10}$/, "Mobile must be exactly 10 digits")
                  .required("Mobile Required"),
                Date: yup
                  .date()
                  .required("Start Date is Required")
                  .typeError("Invalid date"),
                Time: yup.string().required("Select time is required"),
              })}
              onSubmit={(values, { resetForm }) => {
                // ✅ Save to localStorage
                const existingData =
                  JSON.parse(localStorage.getItem("appointments")) || [];
                const newData = [...existingData, values];
                localStorage.setItem("appointments", JSON.stringify(newData));

                // ✅ Show success message
                setFormSubmitted(true);
                resetForm();

                setTimeout(() => {
                  setFormSubmitted(false);
                }, 3000);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  {
                    <div>
                      <div className="d-grid gap-4 mt-4">
                        <div>
                          <Field
                            name="Clinic"
                            as="select"
                            component={FormSelectComponent}
                          >
                            <option value="patho">Pathology Clinic</option>
                            <option value="neuro">Neurology Clinic</option>
                            <option value="cardio">Cardiology Clinic</option>
                          </Field>
                          {/* <div className="text-danger mt-2 error-msg">
                            <ErrorMessage name="Clinic" />
                          </div> */}
                        </div>
                        <div>
                          <Field
                            name="Doctor"
                            as="select"
                            component={FormSelectComponent}
                          >
                            <option value="michael">Michael Brian</option>
                            <option value="maria">Maria Andalaro</option>
                            <option value="richard">Richard Muldoone</option>
                          </Field>
                          {/* <div className="text-danger mt-2 error-msg">
                            <ErrorMessage name="Doctor" />
                          </div> */}
                        </div>
                        <div>
                          <Field
                          
                            type="text"
                            name="UserName"
                            placeholder="Enter your name"
                            component={FormInputComponent}
                          />
                          {/* <div className="text-danger mt-2 error-msg">
                            <ErrorMessage name="UserName" />
                          </div> */}
                        </div>
                        <div>
                          <Field
                            type="text"
                            name="Email"
                            placeholder="Enter your Email"
                            component={FormInputComponent}
                          />
                          {/* <div className="text-danger mt-2 error-msg">
                            <ErrorMessage name="Email" />
                          </div> */}
                        </div>
                      </div>
                      <div className="grid-3-col gap-4 mt-4">
                        <div>
                          <Field
                            type="tel"
                            name="Mobile"
                            component={FormInputComponent}
                            placeholder="Enter Mobile"
                          />
                          {/* <div className="text-danger mt-2 error-msg">
                            <ErrorMessage name="Mobile" />
                          </div> */}
                        </div>
                        <div>
                          <Field
                            type="date"
                            name="Date"
                            component={FormInputComponent}
                          />
                          {/* <div className="text-danger mt-2 error-msg">
                            <ErrorMessage name="Date" />
                          </div> */}
                        </div>
                        <div>
                          <Field
                            type="time"
                            name="Time"
                            component={FormInputComponent}
                          />
                          {/* <div className="text-danger mt-2 error-msg">
                            <ErrorMessage name="Time" />
                          </div> */}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="find-btn w-100"
                        disabled={isSubmitting}
                      >
                        Make Appointment{" "}
                        <i class="fa-solid fa-arrow-right right-arrow"></i>
                      </button>
                      {formSubmitted && (
                        <p className="regular text-success fw-semibold mt-2">
                          Appointment submitted successfully!
                        </p>
                      )}
                    </div>
                  }
                </Form>
              )}
            </Formik>
          </div>
          <div className="contact-block">
            <h5 className="text-white">Quick contacts</h5>
            <p className="regular text-white">
              Please feel free to contact our friendly staff with any medical
              enquiry.
            </p>
            <div className="mt-5">
              <div className="d-flex gap-3 align-items-center">
                <div>
                  <i className="bi bi-telephone-fill con-icon"></i>
                </div>
                <div>
                  <p className="small text-white">
                    Emergency Line: (002) 01061245741
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center mt-3">
                <div>
                  <i className="bi bi-geo-alt con-icon"></i>
                </div>
                <div>
                  <p className="small text-white">
                    Location: Brooklyn, New York, USA
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center mt-3">
                <div>
                  <i className="bi bi-stopwatch-fill con-icon"></i>
                </div>
                <div>
                  <p className="small text-white">
                    Mon - Fri: 8:00 am - 7:00 pm
                  </p>
                </div>
              </div>
            </div>
            <button className="find-btn hover">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};
