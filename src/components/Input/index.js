import {
  InputGroup,
} from './style';

export default function Input(
  { 
    type,
    placeholder = '',
    onChange = () => {},
    className = null,
    id = Math.floor(Math.random() * 1000),
    label = '',
    color = '',
    labelBackground= '',
    hasError = false,
    errorMessage = '',
    value = ''
  }) {
  return (
    <InputGroup className={className} color={color} labelBackground={labelBackground}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} onChange={onChange} value={value} />
      {
        hasError && (
          <p className='error'>{errorMessage}</p>
        )
      }
    </InputGroup>
  )
}
