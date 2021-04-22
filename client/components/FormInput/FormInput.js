export default function FormInput({ handleChange, label, textarea, ...otherProps }) {
  return (
    <div>
      {textarea ? (
        <textarea onChange={handleChange} {...otherProps} />
      ) : (
        <input onChange={handleChange} {...otherProps} />
      )}
      {label && <label htmlFor={label}>{label}</label>}
    </div>
  );
}
