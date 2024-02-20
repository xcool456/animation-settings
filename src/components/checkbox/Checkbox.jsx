import './style.scss';

export const Checkbox = ({ value, onChange, disabled }) => {
	return <input className='checkbox' type='checkbox' checked={value} onChange={onChange} disabled={disabled} />;
};
