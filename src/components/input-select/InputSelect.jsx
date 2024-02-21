import './style.scss';

export const InputSelect = ({ value, options, onChange, disabled }) => {
	return (
		<select value={value} onChange={onChange} className='input-select' disabled={disabled}>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};
