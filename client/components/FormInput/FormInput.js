import styles from '../FormInput/formInput.module.css';

export default function FormInput({ handleChange, label, textarea, ...otherProps }) {
  return (
    <div className={styles.group}>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea onChange={handleChange} {...otherProps} />
      ) : (
        <input className={styles.input} onChange={handleChange} {...otherProps} />
      )}
    </div>
  );
}
