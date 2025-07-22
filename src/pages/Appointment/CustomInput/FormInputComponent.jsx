import "./input.css";

export const FormInputComponent = ({ field, form, ...props }) => {
  const { name } = field;
  const showError = form.touched[name] && form.errors[name];
  const errorClass = showError ? "error-border" : "";

  return (
    <div>
      <input
        {...field}
        {...props}
        className={`input-box w-100 ${errorClass}`}
      />
    </div>
  );
};
