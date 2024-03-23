type FormInputProps = {
  label: string,
  placeholder?: string,
}

const FormInput = ({ label, placeholder }: FormInputProps) => {
  return (
    <div className="relative">
      <input className="input relative placeholder:text-text-secondary/50" type="text" placeholder={placeholder} />
      <span className="absolute left-4 -top-3 bg-bg">{label}</span>
    </div>
  );
};

export default FormInput;
