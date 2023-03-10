import { TbDiscountCheckFilled } from 'react-icons/tb';

export default function Radio({ onOptionChange, value, answer, text }) {
  return (
    <>
      <input
        className='select-radio'
        type='radio'
        name='selector'
        value={value}
        checked={answer === value}
        onChange={onOptionChange}
        id={value}
      />
      <label className='select-label' htmlFor={value}>
        {text}
        {
          answer === value ? (
            <TbDiscountCheckFilled className='icon' />
          ): null
        }
      </label>
    </>
  )
}