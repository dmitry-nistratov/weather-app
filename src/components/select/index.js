import React from "react";

import styles from "./Select.module.scss";

const Select = ({ name, value, text, options, onChange }) => (
  <div className={styles.selectContainer}>
    <input
      name={name}
      className={styles.select}
      value={value}
      text={text}
      onChange={onChange}
      list="options"
    />
    <datalist id="options">
      {options.map(item => (
        <option key={item}>{item}</option>
      ))}
    </datalist>
  </div>
);

export default Select;
