import React from 'react';
import Select from 'react-select';

export const setDefaultFormHelpers = (props) => {
  const defaultAtts = (valueName, isThirdParty = false) =>
    ({
      name: valueName,
      value: props.values[valueName],
      error: props.touched[valueName] && props.errors[valueName],
      onChange: isThirdParty ? props.setFieldValue : props.handleChange,
      onBlur: isThirdParty ? props.setFieldTouched : props.handleBlur
    });
  const defaultErr = (valueName) => (
    props.touched[valueName] && props.errors[valueName] ? <p className="error">{props.errors[valueName]}</p> : ''
  );
  return {defaultAtts, defaultErr};
};

export const withThirdPartyWrapper = (ThirdPartyFormComponent) => {
  return (props) => {
    const passProps = {...props};
    passProps.onChange = (value) => (props.onChange(passProps.name, value));
    passProps.onBlur = () => (props.onBlur(passProps.name, true));
    return (
      <ThirdPartyFormComponent {...passProps} />)
  }
}

export const Selection = withThirdPartyWrapper(Select);

export const arrayToOptions = (array) => array.map((el) => ({ value: el, label: el }));

export const Checkbox = (props) => (
  <label className="checkbox">
    { props.label }
    <input type="checkbox" {...props}/>
    <span className="checkmark"></span>
  </label>
)

export const DisplayFormikState = (props) =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;
