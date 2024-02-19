import './style.scss';

export const Label = ({label, children}) => {
	return (
		<div className='label'>
			<label>{label}</label>
			{children}
		</div>
	);
};
