import "./input.css";

export const FormSelectComponent = ({ field, form, ...props }) => {
  const { name } = field;

  const showError = form.touched[name] && form.errors[name];
  const errorClass = showError ? "error-border" : "";

  return (
    <div>
      <select
        {...field}   
        {...props}  
        className={`select-box w-100 ${errorClass}`}
      >
        {props.children}
      </select>
    </div>
  );
};
