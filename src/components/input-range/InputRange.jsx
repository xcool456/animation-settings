import './style.scss';
import { useMemo } from 'react';

export const InputRange = ({ min, max, step, value, onChange, start = 0,showValue }) => {
	let length = useMemo(() => (Math.abs(min) + Math.abs(max)) / 2, [min, max]);

	let style = useMemo(() => {
		if (start === min) {
			return { '--width': `${(54 / length) * Math.abs(value)}px`, '--left': 0 };
		}
		return {
			'--width': `${(54 / length) * Math.abs(value - start)}px`,
			'--left': start > value ? `${65 - (55 / length) * Math.abs(value - start)}px` : `${54}px`,
		};
	}, [start, value]);
	return (
		<>
			<input className='input-range' type='range' min={min} max={max} step={step} value={value} onChange={onChange} style={style} />
			<span className='input-range-value'>{showValue || value}</span>
		</>
	);
};
